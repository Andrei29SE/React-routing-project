import { Outlet } from 'react-router'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <>
      <Menu className='top' />
      <Outlet />
      <Footer className='bottom' />
    </>
  )
}

export default MainLayout
