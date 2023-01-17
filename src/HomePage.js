import styles from "./style.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    let navigate = useNavigate()

    return <div className={styles.head}>
        <div className={styles.title1}>React專案練習</div>
        <div className={styles.title2}>歡迎光臨我的頁面</div>
        <div className={styles.title3} ><button className={styles.button} onClick={() => { navigate("/ListPage") }}>點此開始</button></div>
    </div>
}

export default Home;

// window.addEventListener("load", () => {
//     const container = document.getElementById('root');
//     const root = createRoot(container);
//     root.render(<MyHead />);
// });