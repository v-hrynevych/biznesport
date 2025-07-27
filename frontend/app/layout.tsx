"use client";
import "./globals.css";
import { Toaster } from "@/shared/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        staleTime: 300000,
                        gcTime: 600000,
                        retry: 1,
                    },
                },
            })
    );
    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <Toaster />
                </QueryClientProvider>
            </body>
        </html>
    );
}
