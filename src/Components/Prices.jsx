import { Link } from 'react-router-dom'
const Prices = () => {
  return (
    <>
      <h1>Prices</h1>

      <dl>
        <li>Курс по </li>
        <li>Курс по </li>
        <li>Курс по </li>
      </dl>
      <Link to='/'>Go home</Link>
    </>
  )
}

export default Prices
