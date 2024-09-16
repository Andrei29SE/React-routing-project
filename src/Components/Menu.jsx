import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to='.' end>
        Home
      </NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='contacts'>Contacts</NavLink>
      <NavLink to='prices'>Price</NavLink>
    </nav>
  )
}

export default Menu
