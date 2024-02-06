"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { AllDataList, DEFAULT_DATA, DataList, TodoContext } from "@/contexts/TodoContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [data, setAllData] = useState<AllDataList>({ all_data: DEFAULT_DATA, fruit_data: [], vegetable_data: [] });

    return (
        <html lang="en">
            <body className={inter.className}>
                <TodoContext.Provider value={{ data, setAllData }}>{children}</TodoContext.Provider>
            </body>
        </html>
    );
}
