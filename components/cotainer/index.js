import React from 'react'
import Box from '../box'
import Texts from '../textBox'
import styles from "./index.module.css"

const Container = () => {
  
  return (
    <div className={styles.container}>
     {/* <Texts/> */}
      <Box/>
      <Box/>
      <Box/>
    </div>
  )
}

export default Container
