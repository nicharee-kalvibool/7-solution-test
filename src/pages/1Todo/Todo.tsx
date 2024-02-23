"use client";
import { useContext } from "react";
import styles from "./styles/Todo.module.css";
import TodoItem from "./components/TodoItem";
import { AllDataList, DataList, TodoContext } from "@/contexts/TodoContext";

const Todo = () => {
    const { all_data, fruit_data, vegetable_data, setAllData, setFruitData, setVegetableData } = useContext(TodoContext);

    const handleClickItem = (data: DataList, key: number) => {
        if (data.type == "Vegetable") {
            setVegetableData((state: DataList[]) => {
                const temp_all_data: DataList[] = [...state];
                temp_all_data.splice(key, 1);
                return [...state, data];
            });
            setAllData((state: DataList[]) => {
                const temp_all_data: DataList[] = [...state];
                temp_all_data.splice(key, 1);
                return temp_all_data;
            });
        } else if (data.type == "Fruit") {
            setFruitData((state: DataList[]) => {
                const temp_all_data: DataList[] = [...state];
                temp_all_data.splice(key, 1);
                return [...state, data];
            });
            setAllData((state: DataList[]) => {
                const temp_all_data: DataList[] = [...state];
                temp_all_data.splice(key, 1);
                return temp_all_data;
            });
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div className={styles.head}>All</div>
                        {all_data?.map((item, key) => (
                            <TodoItem
                                key={`all-${key}`}
                                name={item.name}
                                type={item.type}
                                onClick={() => handleClickItem(item, key)}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div className={styles.head}>Fruit</div>
                        {fruit_data?.map((item, key) => (
                            <TodoItem
                                key={`fruit-${key}`}
                                name={item.name}
                                type={item.type}
                                autoRemove
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div className={styles.head}>Vegetable</div>
                        {vegetable_data?.map((item, key) => (
                            <TodoItem
                                key={`veg-${key}`}
                                name={item.name}
                                type={item.type}
                                autoRemove
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Todo;
