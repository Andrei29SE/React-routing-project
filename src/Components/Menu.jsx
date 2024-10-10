import { NavLink } from 'react-router-dom'

const Menu = ({ count, reset }) => {
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
        <NavLink to='busket'>Busket</NavLink>
      </nav>
    </>
  )
}

export default Menu
