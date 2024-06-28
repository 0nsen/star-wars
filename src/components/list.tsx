import { useEffect, useState } from "react";
import { Character } from "../interfaces/character.interface";
import { getPeople } from "../services/starService";
import { CharacterCard } from "./card";
import { CharacterDialog } from "./dialog";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { GetMany } from "../interfaces/api-response.interface";

export function CharacterList() {
    const [data, setData] = useState<GetMany<Character>>();
    const [chosenOne, setChosenOne] = useState<Character | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPeople({ page })
            .then(data => setData(data))
            .catch(err => {
                if (err instanceof AxiosError) {
                    toast.error(err.message);
                }
                else toast.error('Something went wrong');

                console.error(err);
            })
    }, [page])

    return (
        <>
            <section className="grid grid-cols-repeat-autofit gap-y-4">
                {data?.results.map(person => (
                    <CharacterCard 
                        key={person.name}
                        person={person} 
                        onClick={() => setChosenOne(person)} 
                    />
                ))}
            </section>

            <CharacterDialog 
                chosenOne={chosenOne} 
                onClose={() => setChosenOne(null)} 
            />

            <nav>
                <button className="p-2 text-white" disabled={page == 1} onClick={() => setPage(page - 1)}>Previous</button>
                <button className="p-2 text-white" disabled={!data?.next} onClick={() => setPage(page + 1)}>Next</button>
            </nav>
        </>
    )
}
