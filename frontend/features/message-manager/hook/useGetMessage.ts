import { useQuery } from "@tanstack/react-query";
type MessageRes = {
    id: string;
    text: string;
};
const fetchMessages = async (): Promise<MessageRes[]> => {
    const res = await fetch("http://localhost:8080/api/messages/get");
    if (!res.ok) {
        throw new Error("Failed to fetch messages");
    }
    return res.json();
};
export const useGetMessages = () => {
    return useQuery<MessageRes[]>({
        queryKey: ["messages"],
        queryFn: fetchMessages,
    });
};
