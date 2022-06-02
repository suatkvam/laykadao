import React from 'react'

import styles from './index.module.css'

import Nav from '../nav'
import { Head } from 'next/document'
import { Headers } from 'next/dist/server/web/spec-compliant/headers'
import Header from '../header'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
