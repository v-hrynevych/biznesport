"use client";
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
import { ReactElement } from "react";

interface EditDialogProps {
    dialogTrigger: ReactElement;
    id: string;
}
export function RemoveMessageDialog({ dialogTrigger, id }: EditDialogProps) {
    return (
        <Dialog>
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
                    <Button variant={"default"} size={"sm"}>
                        Usunąć
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
