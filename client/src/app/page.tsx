import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href={"/create"}>CREATE</Link>
      <Link href={"/page"}>LIST</Link>
      <Link href={"/login"}>LOGIN</Link>
    </div>
  );
}
