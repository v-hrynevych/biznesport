"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import { Button } from "./button";
import { Card, CardContent, CardHeader } from "./card";
import {
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Table,
} from "./table";
import { Input } from "./input";

type Message = {
    id: number;
    text: string;
};

export default function MessageManager() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const addMessage = () => {
        if (!input.trim()) return;
        const newMessage = {
            id: Date.now(),
            text: input.trim(),
        };
        setMessages((prev) => [newMessage, ...prev]);
        setInput("");
    };

    const deleteMessage = (id: number) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
    };

    return (
        <Card className="max-w-2xl mx-auto mt-10 shadow-xl rounded-2xl p-4">
            <CardContent className="space-y-4">
                <CardHeader className="flex gap-2 p-5px">
                    <Input
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                addMessage();
                            }
                        }}
                        placeholder="Wpisz wiadomość..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={addMessage}>Dodaj</Button>
                </CardHeader>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Wiadomość</TableHead>
                            <TableHead>Akcje</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages.map((msg) => {
                            return (
                                <TableRow key={msg.id}>
                                    <TableCell className="font-mono text-xs">
                                        {msg.id}
                                    </TableCell>
                                    <TableCell>{msg.text}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() =>
                                                deleteMessage(msg.id)
                                            }
                                        >
                                            <>
                                                <Trash2 className="w-4 h-4 text-red-500" />
                                            </>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {messages.length === 0 && (
                            <TableRow>
                                <TableCell className="text-center text-muted-foreground">
                                    Brak wiadomości
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
