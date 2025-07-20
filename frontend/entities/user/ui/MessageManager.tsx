"use client";
import { Trash2, Settings } from "lucide-react";

import { Button } from "../../../shared/ui/button";
import { Card, CardContent, CardHeader } from "../../../shared/ui/card";
import {
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Table,
} from "../../../shared/ui/table";
import { InputForm } from "@/features/message-manager/ui/InputForm";
import { EditMessageDialog } from "./EditDialog";
import { RemoveMessageDialog } from "./RemoveDialog";

export default function MessageManager() {
    const messages = [{ id: "1", text: "lorem ipsum" }];

    return (
        <Card className="max-w-2xl mx-auto mt-10 shadow-xl rounded-2xl p-4">
            <CardContent className="space-y-4">
                <CardHeader className="flex gap-2 p-5px">
                    <InputForm />
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
                        {messages &&
                            messages.map((msg) => {
                                return (
                                    <TableRow key={msg.id}>
                                        <TableCell className="font-mono text-xs">
                                            {msg.id}
                                        </TableCell>
                                        <TableCell>{msg.text}</TableCell>
                                        <TableCell className="px-4 py-2">
                                            <EditMessageDialog
                                                dialogTrigger={
                                                    <Button
                                                        variant="default"
                                                        size="icon"
                                                        onClick={() => {}}
                                                    >
                                                        <>
                                                            <Settings />
                                                        </>
                                                    </Button>
                                                }
                                                id={msg.id}
                                                text={msg.text}
                                            />
                                            <RemoveMessageDialog
                                                id={msg.id}
                                                dialogTrigger={
                                                    <Button
                                                        variant="destructive"
                                                        size="icon"
                                                        onClick={() => {}}
                                                    >
                                                        <>
                                                            <Trash2 />
                                                        </>
                                                    </Button>
                                                }
                                            />
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
