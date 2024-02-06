"use client";
import styles from "./styles/page.module.css";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div
                            className={styles.head}
                            onClick={() => router.push("/1-to-do")}
                        >
                            <h3>Section 1</h3>
                            <h1>TO-DO List</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.listBox}>
                        <div
                            className={styles.disabled}
                        >
                            Empty
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
