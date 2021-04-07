import useSWR from 'swr'
import { fetcher } from '../api'

export const useCompanyData = () => {
  const { data: { name, companyName } = {} } = useSWR('/api/users', fetcher)
  const { data: { logoUrl, ...datas } = {} } = useSWR(`/api/companies?companyName=${companyName}`, fetcher)

  return { name, companyName, logoUrl, ...datas }
}
