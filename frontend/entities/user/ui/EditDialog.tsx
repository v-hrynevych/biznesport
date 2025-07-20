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
import { Input } from "@/shared/ui/input";

import { Label } from "@radix-ui/react-label";
import { ReactElement } from "react";

interface EditDialogProps {
    dialogTrigger: ReactElement;
    id: string;
    text: string;
}
export function EditMessageDialog({
    dialogTrigger,
    text,
    id,
}: EditDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edytuj wiadomość #{id}</DialogTitle>
                    <DialogDescription>
                        Naprawdę chcesz edytować wiadomość.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Wiadomość:</Label>
                            <Input
                                id="name-1"
                                name="name"
                                defaultValue={text}
                            />
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={"destructive"} size={"sm"}>
                            Anulować
                        </Button>
                    </DialogClose>
                    <Button size={"sm"} type="submit">Zapisz zmiany</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
