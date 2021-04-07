import React from 'react'
import styles from './index.module.scss'

interface Data {
  counterpartiesNum: number
  subsidiariesNum: number
  facilitiesNum: number
}

const companyOverview = ({ counterpartiesNum, subsidiariesNum, facilitiesNum }: Data) => {
  return (
    <div className={styles.companyOverview}>
      <div className={styles.dataItem}>
        <p className={styles.label}>{counterpartiesNum}</p>
        <p>Counterparties</p>
      </div>
      <div className={styles.dataItem}>
        <p className={styles.label}>{subsidiariesNum}</p>
        <p>Subsidiaries</p>
      </div>
      <div className={styles.dataItem}>
        <p className={styles.label}>{facilitiesNum}</p>
        <p>Facilities</p>
      </div>
    </div>
  )
}

export default companyOverview
