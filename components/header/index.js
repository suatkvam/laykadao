import Button from '../button'
import Nav from '../nav'
import { Logo } from '../icons'

import styles from './index.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <Button>NFT Ugulaması</Button>
    </header>
  )
}

export default Header
