"use client";


import { useId,  } from "react";
import { Trash2 } from "lucide-react";

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
import { Input } from "../../../shared/ui/input";
import { InputForm } from "@/features/message-manager/ui/InputForm";


export default function MessageManager() {
  

    return (
        <Card className="max-w-2xl mx-auto mt-10 shadow-xl rounded-2xl p-4">
            <CardContent className="space-y-4">
                <CardHeader className="flex gap-2 p-5px">
                    {/* <h2 className="text-xl font-semibold">
                        Zarządzanie wiadomościami
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-2"
                    >
                        <div className="flex gap-2 items-start">
                            <Input
                                placeholder="Wpisz wiadomość..."
                                {...register("text")}
                            />
                            <Button type="submit">Dodaj</Button>
                        </div>
                    </form> */}
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
                    {/* <TableBody>
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
                    </TableBody> */}
                </Table>
            </CardContent>
        </Card>
    );
}
