import Avatar from "boring-avatars";
import { Character } from "../interfaces/character.interface";

interface CardProps {
    person: Character,
    onClick: () => void,
}

export function CharacterCard(props: CardProps) {
    const { person, onClick } = props;

    return (
        <button 
            className="flex flex-col items-center relative"
            onClick={onClick}
        >
            <Avatar
                size={350}
                square={true}
                name={person.name}
                variant="beam"
            />
            <h2 className="text-center absolute bottom-2">{person.name}</h2>
        </button>
    )
}
