import { QueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface EditMessageProp {
    id: string;
    text: string;
}
interface EditMessageResponse {
    id: string;
    text: string;
}

async function EditMessageRequest({
    id,
    text,
}: EditMessageProp): Promise<EditMessageResponse> {
    const res = await fetch(`http://localhost:8080/api/messages/edit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, id }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Błąd podczas wysyłania wiadomości");
    }

    return res.json();
}

export const useEditMessage = () => {
    const queryClient = new QueryClient();
    return useMutation({
        mutationFn: EditMessageRequest,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["get-messeges"] });
            toast.success(`✅ Wiadomość zmieniona na: ${data.text}`);
        },
        onError: (error) => {
            toast.error(
                `❌ ${error.message || "Błąd podczas wysyłania wiadomości"}`
            );
        },
    });
};
