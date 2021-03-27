import React from 'react'
import Link from 'next/link'
import styles from './item.module.scss'
import cls from 'classnames'

interface Props extends NavigationItem {
  isActive: boolean
}

export interface NavigationItem {
  title: string
  url: string
}

const Item = ({ title, url, isActive }: Props) => {
  return (
    <div
      className={cls(styles.item, {
        [styles.active]: isActive,
      })}>
      <Link href={url}>{title}</Link>
    </div>
  )
}

export default Item
