import { Character } from "../interfaces/character.interface";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface DialogProps {
    chosenOne: Character | null,
    onClose: () => void,
}

export function CharacterDialog(props: DialogProps) {
    const { chosenOne, onClose } = props;

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
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
