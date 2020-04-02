import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>HyPx4lRv87</title>
        <meta property="og:title" content="HyPx4lRv87" />
      </Helmet>
      <AppComponent src="/playground_assets/p1.jpg"></AppComponent>
    </div>
  )
}

export default Page
