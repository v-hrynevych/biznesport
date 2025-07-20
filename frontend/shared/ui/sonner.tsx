"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: [
                        "group toast",
                        "backdrop-blur-md", // розмиття як скло
                        "bg-white/70", // напівпрозорий білий фон
                        "text-black", // чорний текст
                        "shadow-md", // легка тінь
                        "border border-zinc-300", // тонка сіра рамка
                        "rounded-xl", // скруглення як у Apple
                        "px-4 py-3", // внутрішні відступи
                    ].join(" "),
                    description: "text-zinc-700", // приглушений текст
                    actionButton: [
                        "bg-black",
                        "text-white",
                        "hover:bg-neutral-800",
                        "rounded-md px-3 py-1.5 text-sm",
                    ].join(" "),
                    cancelButton: [
                        "bg-zinc-200",
                        "text-black",
                        "hover:bg-zinc-300",
                        "rounded-md px-3 py-1.5 text-sm",
                    ].join(" "),
                },
            }}
            {...props}
        />
    );
};

export { Toaster };
