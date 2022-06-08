import React from 'react'
import styles from "./index.module.css"

const Texts = () => {
    const data = {
        title: "Luna DAO Nedir?",
        desc: "Türk kripto ekosistemindeki bireyleri ve projeleri bir araya getirip gelişimlerini teşvik eden merkeziyetsiz otonom çatı yapıdır.",
    };
    return (
    <div className={styles.texts}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.desc}>{data.desc}</p>
      </div>
    )
  
}

export default Texts
