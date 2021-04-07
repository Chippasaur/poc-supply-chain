import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

interface Data {
  counterpartiesNum: number
  subsidiariesNum: number
  facilitiesNum: number
}

const companyOverview = ({ counterpartiesNum, subsidiariesNum, facilitiesNum }: Data) => {
  return (
    <div className={styles.companyOverview}>
      <Image src="/map.png" alt="logo" width={400} height={200} layout={'responsive'} className={styles.img} />
      <div className={styles.datas}>
        <div className={styles.dataItem}>
          <p className={styles.label}>{Number(counterpartiesNum).toLocaleString()}</p>
          <p>Counterparties</p>
        </div>
        <div className={styles.dataItem}>
          <p className={styles.label}>{Number(subsidiariesNum).toLocaleString()}</p>
          <p>Subsidiaries</p>
        </div>
        <div className={styles.dataItem}>
          <p className={styles.label}>{Number(facilitiesNum).toLocaleString()}</p>
          <p>Facilities</p>
        </div>
      </div>
    </div>
  )
}

export default companyOverview
