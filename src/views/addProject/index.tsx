import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { LayoutWithSidebar } from '@components'
import { Form, Header, InfoBox, Menu, HelmetComponent } from "./components"

import styles from "./styles.module.scss"

export const AddProject = memo(() => {
  return (
    <div className={styles.addProjectContainer}>
      <HelmetComponent />
      <LayoutWithSidebar rootClassName='layout-with-sidebar-root-class-name2'>
        <Header />
        <Menu />

        <div className={styles.addProjectContainerForm}>
          <div className={styles.addProjectUnderHeader}>
            <div className={styles.addProjectCard}>
              <Form />
              <InfoBox />
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
})
