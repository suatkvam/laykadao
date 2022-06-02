import React, { useContext } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Layout from '../components/layout'
import Button from '../components/button'
import * as Icon from '../components/icons'
import { THEME } from '../constants'
import Hero from '../components/hero'

function HomePage() {
  const store = useContext(StoreContext)

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <Hero />
      <br />

      <Icon.Search style={{ fontSize: 24 }} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/*<div>
        Change Theme{' '}
        <Button
          onClick={() =>
            store.changeTheme(
              store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          }
        >
          {store.theme === THEME.LIGHT ? 'Dark' : 'Light'}
        </Button>
      </div>*/}

      <br />
      <br />

      <div>
        API url (env): <b>{process.env.API_URL}</b>
      </div>
    </Layout>
  )
}

export default HomePage
