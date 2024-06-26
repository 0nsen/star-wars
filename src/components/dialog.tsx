import { useEffect, useState } from "react";
import { Character } from "../interfaces/character.interface";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Planet } from "../interfaces/planet.interface";

interface DialogProps {
    chosenOne: Character | null,
    onClose: () => void,
}

export function CharacterDialog(props: DialogProps) {
    const { chosenOne, onClose } = props;
    const [planet, setPlanet] = useState<Planet | null>(null);

    useEffect(() => {
        setPlanet(null);
        if (!chosenOne) return;

        fetch(chosenOne.homeworld)
            .then(res => res.json())
            .then((data: Planet) => setPlanet(data))
            .catch(err => console.error(err))
    }, [chosenOne])

    return (
        <Dialog open={Boolean(chosenOne)} onClose={onClose} className='rounded-lg relative z-50'>
            <div className="fixed inset-0 w-screen">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 space-y-4">
                        <DialogTitle as="h2" className="text-slate-950">
                            {chosenOne?.name}
                        </DialogTitle>
                        <p className="text-slate-950 font-mono">{`Height: ${chosenOne?.height}m`}</p>
                        <p className="text-slate-950 font-mono">{`Mass: ${chosenOne?.mass}kg`}</p>
                        <p className="text-slate-950 font-mono">{`Birth Year: ${chosenOne?.birth_year}`}</p>
                        <p className="text-slate-950 font-mono">{`Gender: ${chosenOne?.gender}`}</p>
                        <p className="text-slate-950 font-mono">{`Planet: ${planet?.name || 'Loading...'}`}</p>
                        <p className="text-slate-950 font-mono">{`Rotation Period: ${planet?.rotation_period || 'Loading...'}`}</p>
                        <p className="text-slate-950 font-mono">{`Orbital Period: ${planet?.orbital_period || 'Loading...'}`}</p>
                        <p className="text-slate-950 font-mono">{`Diameter: ${planet?.diameter || 'Loading...'}`}</p>
                        <p className="text-slate-950 font-mono">{`Climate: ${planet?.climate || 'Loading...'}`}</p>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
