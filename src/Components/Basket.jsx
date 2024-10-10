import { MdOutlineArticle } from 'react-icons/md'
const Basket = ({ count, reset }) => {
  return (
    <>
      <div className='busket' title='Add item to basket'>
        <MdOutlineArticle />
        {count > 0 && <p> {count}</p>}
      </div>
      {count > 0 && <button onClick={reset}>reset</button>}
    </>
  )
}

export default Basket
