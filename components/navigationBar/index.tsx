import styles from './index.module.scss'
import { memo } from 'react'
import Item, { NavigationItem } from './item'
import { useRouter } from 'next/router'
import map from 'lodash/map'
import Image from 'next/image'
import Icon from '../icon'
import Avatar from '@material-ui/core/Avatar'
import { useCompanyData } from '../../utils/hooks'

const Navigation: Array<NavigationItem> = [
  { title: 'Dashboard', url: '/' },
  { title: 'Solutions', url: '/test' },
  { title: 'Profile', url: '/test' },
  { title: 'Quotations', url: '/test' },
  { title: 'Connections', url: '/test' },
  { title: 'Products', url: '/test' },
  { title: 'Surveys', url: '/test' },
  { title: 'Counterparties', url: '/counterparties' },
]

const NavigationBar = () => {
  const router = useRouter()
  const currentPath = router.pathname

  const { logoUrl } = useCompanyData()
  return (
    <div className={styles.navigationBar}>
      <Image src="/images/logo.png" width={60} height={60} className={styles.img} />
      <div className={styles.menus}>
        {map(Navigation, ({ title, url }) => (
          <Item key={title} title={title} url={url} isActive={currentPath === url} />
        ))}
      </div>
      <div className={styles.message}>
        <div className={styles.icons}>
          <Icon type={'alert'} size={20} />
          <Icon type={'messages'} size={20} />
          <Icon type={'search'} size={20} />
        </div>
        <Avatar src={logoUrl} className={styles.avatar} />
      </div>
    </div>
  )
}

export default memo(NavigationBar)
