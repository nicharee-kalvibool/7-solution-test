import React, { createContext } from "react";

export type AllDataList = {
    all_data: DataList[];
    fruit_data: DataList[];
    vegetable_data: DataList[];
};

export type DataList = {
    type: string;
    name: string;
};

export const DEFAULT_DATA: DataList[] = [
    {
        type: "Fruit",
        name: "Apple",
    },
    {
        type: "Vegetable",
        name: "Broccoli",
    },
    {
        type: "Vegetable",
        name: "Mushroom",
    },
    {
        type: "Fruit",
        name: "Banana",
    },
    {
        type: "Vegetable",
        name: "Tomato",
    },
    {
        type: "Fruit",
        name: "Orange",
    },
    {
        type: "Fruit",
        name: "Mango",
    },
    {
        type: "Fruit",
        name: "Pineapple",
    },
    {
        type: "Vegetable",
        name: "Cucumber",
    },
    {
        type: "Fruit",
        name: "Watermelon",
    },
    {
        type: "Vegetable",
        name: "Carrot",
    },
];
export type TodoContextType = {
    all_data: DataList[];
    fruit_data: DataList[];
    vegetable_data: DataList[];
    setAllData: React.Dispatch<React.SetStateAction<DataList[]>>;
    setFruitData: React.Dispatch<React.SetStateAction<DataList[]>>;
    setVegetableData: React.Dispatch<React.SetStateAction<DataList[]>>;
};

export const TodoContext = createContext<TodoContextType>(null!);
