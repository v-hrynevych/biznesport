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
import { z } from "zod";
import { FormSchema } from "../model/validation";
import { useSendMessage } from "../hook/useSendMessage";

export function InputForm() {
    const { mutate, isPending } = useSendMessage();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            text: "",
        },
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
        mutate(
            { text: data.text },
            {
                onSuccess() {
                    form.reset();
                },
            }
        );
    }
    return (
        <Form {...form}>
            <form
                id="addMessageForm"
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
            >
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-1 gap-y-[5px]">
                            <FormLabel className="text-sm font-medium text-gray-700 mb-1">
                                Zarządzanie wiadomościami
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                    placeholder="Wpisz wiadomość..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            <Button
                                className="  py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                                type="submit"
                            >
                                {isPending ? "wysyłanie" : "wysłać"}
                            </Button>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
