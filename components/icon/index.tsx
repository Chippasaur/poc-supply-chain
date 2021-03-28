import React, { CSSProperties, useMemo } from 'react'
import cls from 'classnames'
import isNumber from 'lodash/isNumber'
import styles from './index.module.scss'

interface IProps {
  type: string
  className?: string
  size?: number
  pointer?: boolean
  onClick?: () => void
}

export const Icon = ({ type, className, size, ...props }: IProps) => {
  const style: CSSProperties = useMemo(() => {
    return isNumber(size) ? { fontSize: `${size}px` } : {}
  }, [size])
  return <i className={cls(styles.icon, `icon-${type}`, className)} style={style} {...props} />
}

Icon.displayName = 'Icon'

export default Icon
