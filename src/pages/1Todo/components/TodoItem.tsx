import { AllDataList, DataList, TodoContext } from "@/contexts/TodoContext";
import styles from "@/pages/1Todo/styles/TodoItem.module.css";
import { ButtonHTMLAttributes, LegacyRef, useCallback, useContext, useEffect, useRef, useState } from "react";

type TodoItemProps = {
    name: string;
    type: string;
    onClick?: Function;
    autoRemove?: boolean;
};

const TodoItem = ({ name, type, onClick, autoRemove }: TodoItemProps) => {
    const buttonRef = useRef(null);
    const { setAllData, setFruitData, setVegetableData } = useContext(TodoContext);

    const handleClickRemoveItem = useCallback(() => {
        let remove_item: DataList = {
            name,
            type,
        };
        if (type == "Vegetable") {
            setVegetableData((state: DataList[]) => {
                const _state: DataList[] = [...state];
                let _index = _state.findIndex((item) => item.name === name);
                console.log(_index);
                _state.splice(_index, 1);
                return _state;
            });
        } else if (type == "Fruit") {
            setFruitData((state: DataList[]) => {
                const _state: DataList[] = [...state];
                let _index = _state.findIndex((item) => item.name === name);
                console.log(_index);
                _state.splice(_index, 1);
                return _state;
            });
        }
        setAllData((state: DataList[]) => {
            return [...state, remove_item];
        });
    }, [name]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (autoRemove) {
            timer = setTimeout(() => {
                if (buttonRef.current) {
                    let taget = buttonRef.current as HTMLButtonElement;
                    taget?.click();
                }
            }, 5000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [name]);

    return (
        <button
            ref={buttonRef}
            className={styles.item}
            onClick={() => {
                if (typeof onClick == "function") {
                    onClick();
                } else if (autoRemove) {
                    handleClickRemoveItem();
                }
            }}
        >
            {name}
        </button>
    );
};

export default TodoItem;
