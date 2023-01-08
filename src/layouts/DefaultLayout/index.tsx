import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DefaultLayoutWrapper } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <Outlet />
    </DefaultLayoutWrapper>
  )
}
