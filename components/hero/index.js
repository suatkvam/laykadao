import React from 'react'
import Button from '../button'

import styles from './index.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Türkiye'nin Blokzincir Merkezi</h1>
      <h3>Türkiye’nin ilk merkeziyetsiz otonom organizasyonu.</h3>
      <Button>Öğrenme Merkezi</Button>
    </section>
  )
}

export default Hero
