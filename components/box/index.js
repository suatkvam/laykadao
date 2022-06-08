import React from 'react'
import styles from './index.module.css'
import Image from 'next/image';

const Box = () => {
  const data = {

    imgPath: "/test.png",
    imgWidth:"321",
    imgHeigth:"380",

    header: "Merak Edelim",
    desc: "Merağın bizi ilerletecek en önemli faktörlerden olduğuna inanıyoruz.",
  };

  return (
    <div className={styles.box}>
      <div className={styles.imageBox}>
        <Image className={styles.image} src={data.imgPath} width={data.imgWidth} height={data.imgHeigth} objectFit="contain"/>
      </div>
      <div className={styles.text}>
           <h4 className={styles.title}>{data.header}</h4>
      <p className={styles.desc}> {data.desc}</p>
      </div>
    </div>
  )
}

export default Box
