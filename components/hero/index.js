import React from 'react'
import Button from '../button'

import styles from './index.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.text}>Türkiye'nin <br/> Blokzincir Merkezi</h1>
      <h3 className={styles.text}>Türkiye’nin ilk merkeziyetsiz otonom organizasyonu.</h3>
      <Button className={styles.btn}>Öğrenme Merkezi</Button>
    </section>
  )
}

export default Hero
