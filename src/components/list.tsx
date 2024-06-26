import { useEffect, useState } from "react";
import { Character } from "../interfaces/character.interface";
import { getPeople } from "../services/starService";
import { CharacterCard } from "./card";
import { CharacterDialog } from "./dialog";
import { toast } from "sonner";
import { AxiosError } from "axios";

export function CharacterList() {
    const [people, setPeople] = useState<Character[]>([]);
    const [chosenOne, setChosenOne] = useState<Character | null>(null);

    useEffect(() => {
        getPeople()
            .then(data => setPeople(data.results))
            .catch(err => {
                if (err instanceof AxiosError) {
                    toast.error(err.message);
                }
                else toast.error('Something went wrong');

                console.error(err);
            })
    }, [])

    return (
        <section className="grid grid-cols-repeat-autofit gap-y-4">
            {people.map(person => (
                <CharacterCard 
                    key={person.name}
                    person={person} 
                    onClick={() => setChosenOne(person)} 
                />
            ))}
            <CharacterDialog 
                chosenOne={chosenOne} 
                onClose={() => setChosenOne(null)} 
            />
        </section>
    )
}
