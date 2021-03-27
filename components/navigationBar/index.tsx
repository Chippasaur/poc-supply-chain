import styles from './index.module.scss'
import { memo } from 'react'
import Item, { NavigationItem } from './item'
import { useRouter } from 'next/router'
import map from 'lodash/map'

const Navigation: Array<NavigationItem> = [
  { title: 'Dashboard', url: '/' },
  { title: 'Counterparties', url: '/counterparties' },
]

const NavigationBar = () => {
  const router = useRouter()
  console.log(router)
  const currentPath = router.pathname
  return (
    <div className={styles.NavigationBar}>
      <div className={styles.menus}>
        {map(Navigation, ({ title, url }) => (
          <Item key={url} title={title} url={url} isActive={currentPath === url} />
        ))}
      </div>
    </div>
  )
}

export default memo(NavigationBar)
