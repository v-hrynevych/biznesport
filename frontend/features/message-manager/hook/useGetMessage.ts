import { useQuery } from "@tanstack/react-query";
type MessageRes = {
    id: number;
    text: string;
};

export const useGetMessages = () => {
    return useQuery<MessageRes[]>({
        queryKey: ["get-messeges"],
        queryFn: async () => {
            const res = await fetch("http://localhost:8080/api/messages/get");
            if (!res.ok) throw new Error("Failed to fetch messages");
            return res.json();
        },
    });
};
