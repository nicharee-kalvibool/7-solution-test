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
    const [all_data, setAllData] = useState<DataList[]>(DEFAULT_DATA);
    const [fruit_data, setFruitData] = useState<DataList[]>([]);
    const [vegetable_data, setVegetableData] = useState<DataList[]>([]);

    return (
        <html lang="en">
            <body className={inter.className}>
                <TodoContext.Provider value={{ all_data, fruit_data, vegetable_data, setAllData, setFruitData, setVegetableData }}>
                    {children}
                </TodoContext.Provider>
            </body>
        </html>
    );
}
