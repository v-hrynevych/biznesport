import { QueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface SendMessageInput {
    id: string;
    text: string;
}
interface SendMessageResponse {
    id: string;
    text: string;
}

async function sendMessageRequest({
    id,
    text,
}: SendMessageInput): Promise<SendMessageResponse> {
    const res = await fetch(`http://localhost:8080/api/messages/send`, {
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

export const useSendMessage = () => {
    const queryClient = new QueryClient();
    return useMutation({
        mutationFn: sendMessageRequest,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["get-messeges"] });

            toast.success(`✅ Wiadomość wysłana: ${data.text}`);
        },
        onError: (error) => {
            toast.error(
                `❌ ${error.message || "Błąd podczas wysyłania wiadomości"}`
            );
        },
    });
};
