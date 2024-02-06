import { AllDataList, DataList, TodoContext } from "@/contexts/TodoContext";
import styles from "@/pages/1Todo/styles/TodoItem.module.css";
import { useCallback, useContext, useEffect, useRef } from "react";

type TodoItemProps = {
    index: number;
    name: string;
    type: string;
    onClick?: Function;
    autoRemove?: boolean;
};

const TodoItem = ({ index, name, type, onClick, autoRemove }: TodoItemProps) => {
    const autoRemoveRef = useRef<NodeJS.Timeout>();

    const { data, setAllData } = useContext(TodoContext);

    const handleClickRemoveItem = (type: string, index: number) => {
        let remove_item: DataList = {
            type,
            name,
        };
        if (type == "Vegetable") {
            setAllData((state: AllDataList) => {
                const temp_new_data: DataList[] = [...state.vegetable_data];
                temp_new_data.splice(index, 1);
                return {
                    ...state,
                    all_data: [...state.all_data, remove_item],
                    vegetable_data: temp_new_data,
                };
            });
        } else if (type == "Fruit") {
            setAllData((state: AllDataList) => {
                const temp_new_data: DataList[] = [...state.fruit_data];
                temp_new_data.splice(index, 1);
                return {
                    ...state,
                    all_data: [...state.all_data, remove_item],
                    fruit_data: temp_new_data,
                };
            });
        }
    };

    const setAutoRemove = useCallback(() => {
        autoRemoveRef.current = setInterval(() => {
            handleClickRemoveItem(type, index);
        }, 5000);
    }, [data]);

    useEffect(() => {
        if (autoRemove) {
            setAutoRemove();
        }
        return () => {
            if (autoRemoveRef.current) {
                clearInterval(autoRemoveRef.current);
            }
        };
    }, []);

    return (
        <div
            id={`${type}-${name}`}
            className={styles.item}
            onClick={() => {
                if (typeof onClick == "function") {
                    onClick();
                } else if (autoRemove) {
                    handleClickRemoveItem(type, index);
                }
            }}
        >
            {name}
        </div>
    );
};

export default TodoItem;
