import { NavLink } from 'react-router-dom'
import Basket from './Basket'

const Menu = () => {
  return (
    <>
      <nav className='navigation'>
        <NavLink to='.' end>
          Home
        </NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contacts'>Contacts</NavLink>
        <NavLink to='prices'>Price</NavLink>
        <NavLink to='courses'>Courses</NavLink>
        <Basket />
      </nav>
    </>
  )
}

export default Menu
