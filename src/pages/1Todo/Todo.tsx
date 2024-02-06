"use client";
import { useContext } from "react";
import styles from "./styles/Todo.module.css";
import TodoItem from "./components/TodoItem";
import { DataList, TodoContext } from "@/contexts/TodoContext";

const Todo = () => {
    const { data: all_data, setAllData } = useContext(TodoContext);

    const handleClickItem = (data: DataList, key: number) => {
        const temp_all_data: DataList[] = [...all_data.all_data];
        temp_all_data.splice(key, 1);

        if (data.type == "Vegetable") {
            const temp: DataList[] = [...all_data.vegetable_data, data];
            setAllData({
                ...all_data,
                all_data: temp_all_data,
                vegetable_data: temp,
            });
        } else if (data.type == "Fruit") {
            const temp: DataList[] = [...all_data.fruit_data, data];
            setAllData({
                ...all_data,
                all_data: temp_all_data,
                fruit_data: temp,
            });
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div className={styles.head}>All</div>
                        {all_data?.all_data?.map((item, key) => (
                            <TodoItem
                                key={`all-${key}`}
                                index={key}
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
                        {all_data?.fruit_data?.map((item, key) => (
                            <TodoItem
                                key={`fruit-${key}`}
                                index={key}
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
                        {all_data?.vegetable_data?.map((item, key) => (
                            <TodoItem
                                key={`veg-${key}`}
                                index={key}
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
