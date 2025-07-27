import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface RemoveMessageProp {
    id: string;
}

async function RemoveMessageRequest({ id }: RemoveMessageProp) {
    const res = await fetch(`http://localhost:8080/api/messages/remove/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Błąd podczas usuwanie wiadomości");
    }

    return res.json();
}

export const useRemoveMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: RemoveMessageRequest,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['messages'] });
            toast.success(`✅ Wiadomość usunięto!`);
        },
        onError: (error) => {
            toast.error(
                `❌ ${error.message || "Błąd podczas usuwanie wiadomości"}`
            );
        },
    });
};
