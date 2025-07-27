"use client";
import { useRemoveMessage } from "@/features/message-manager/hook/useRemoveMessage";
import { Button } from "@/shared/ui/button";
import {
    DialogHeader,
    DialogFooter,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/shared/ui/dialog";
import { ReactElement, useState } from "react";

interface EditDialogProps {
    dialogTrigger: ReactElement;
    id: number;
}
export function RemoveMessageDialog({ dialogTrigger, id }: EditDialogProps) {
    const [open, setOpen] = useState(false);
    const { mutate } = useRemoveMessage();
    const handleSubmit = () => {
        mutate({ id }, { onSuccess: () => setOpen(false) });
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Usuń wiadomość #{id}</DialogTitle>
                    <DialogDescription>
                        Naprawdę chcesz usunąć wiadomość.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={"destructive"} size={"sm"}>
                            Anulować
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={handleSubmit}
                        variant={"default"}
                        size={"sm"}
                    >
                        Usunąć
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
