import { Outlet } from 'react-router'
import Menu from '../Components/Menu'

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayout
