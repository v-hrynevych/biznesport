"use client";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    Form,
} from "@/shared/ui/form";
import { FormSchema } from "@/features/message-manager/model/validation";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { useEditMessage } from "@/features/message-manager/hook/useEditMessage";

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
    const [open, setOpen] = useState(false);

    const { mutate } = useEditMessage();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        values: {
            text: text,
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        mutate(
            { text: data.text, id: id },
            { onSuccess: () => setOpen(false) }
        );
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edytuj wiadomość #{id}</DialogTitle>
                    <DialogDescription>
                        Naprawdę chcesz edytować wiadomość.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        id="editMessageForm"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="text"
                            render={({ field }) => (
                                <FormItem className="grid gap-4">
                                    <FormLabel htmlFor="name-1">
                                        Wiadomość:
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormMessage />
                    </form>
                </Form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={"destructive"} size={"sm"}>
                            Anulować
                        </Button>
                    </DialogClose>
                    <Button form="editMessageForm" size={"sm"} type="submit">
                        Zapisz zmiany
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
