import Image from "next/image";
import styles from "./styles/page.module.css";

type DataList = {
    type: string;
    name: string;
};

const DEFAULT_DATA: DataList[] = [
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
export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div className={styles.head}>All</div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div className={styles.head}>Fruit</div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div className={styles.head}>Vegetable</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
