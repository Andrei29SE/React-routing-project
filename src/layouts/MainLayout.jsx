import { Outlet } from 'react-router'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'

const MainLayout = (count) => {
  return (
    <>
      <Menu className='top' count={count} />
      <Outlet />
      <Footer className='bottom' />
    </>
  )
}

export default MainLayout
