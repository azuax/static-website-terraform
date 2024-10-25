import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h1 className={styles.h1}>
                    Static Website Deployed with Terraform
                </h1>
                <div className={styles.banner}>
                    <Image
                        src="/architecture-diagram.png"
                        width={600}
                        height={200}
                        alt="Architecture Diagram"
                    />
                </div>
            </div>
        </div>
    );
}
