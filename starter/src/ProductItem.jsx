import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { useGlobalContext } from "./Context"

const ProductItem = ({ id, price, title, img, amount }) => {
  const { removeItem, takeOne, addOne } = useGlobalContext()
  return (
    <section className='cartItemContainer'>
      <img src={img} />
      <div className='cartItemDescription'>
        <h5>{title}</h5>
        <p>{price}</p>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
      <div className='cartItemquantity'>
        <button onClick={() => addOne(id)}><FaChevronUp/></button>
        <p>{amount}</p>
        <button
          onClick={() => {
            takeOne(id)
          }}
        >
         <FaChevronDown/>
        </button>
      </div>
    </section>
  )
}
export default ProductItem
