"use client";
import { Button } from "@/shared/ui/button";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    Form,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
    text: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});
export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            text: "",
        },
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("Nowa wiadomość została utworzona:", {
            description: data.text,
            action: {
                label: "Undo",
                onClick: () => console.log("reser"),
            },
        });
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
            >
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Zarządzanie wiadomościami</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Wpisz wiadomość..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
