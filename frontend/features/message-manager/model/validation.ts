import { z } from "zod";

export const FormSchema = z.object({
    text: z
        .string()
        .min(3, {
            message: "Nazwa użytkownika musi mieć co najmniej 2 znaki.",
        })
        .refine((val) => !/^\d+$/.test(val), {
            message: "nie może zawierać wyłącznie liczb",
        }),
});
