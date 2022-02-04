import React from 'react'

import projectStyles from '../style.module.css'
import styles from './copyright.module.css'

const Copyright = () => {
  return (
    <div className={styles['Copyright']}>
      <div
        className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
      >
        <span className={styles['text']}>
          <span className={styles['text1']}>
            © All rights reserved
          </span>
        </span>
      </div>
    </div>
  )
}

export default Copyright
