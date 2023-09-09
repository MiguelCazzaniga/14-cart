import { useGlobalContext } from "./Context"
import ProductItem from "./ProductItem"


export const ProductsCart = () => {
  const {cart,clearData,totalCost}=useGlobalContext()
  const cartArray=Array.from(cart.entries())
  if (cartArray.length>0){
    return (
      <section className='cartContainer'>
        <div className='cartArray'>
          {cartArray.map((cartItem) => {
            const [id, item] = cartItem
            return <ProductItem key={id} {...item} />
          })}
        </div>
        <div className='cartFoot'>
          <div className='cartFootTotals'>
            <h4>Total</h4>
            <p>${totalCost}</p>
          </div>
          <div className='cartFootTotalButton'>
            <button onClick={clearData}>Clear Cart</button>
          </div>
        </div>
      </section>
    )
  }else{
    return(
      <div className="EmptyBag">
        <h4>is currently empty</h4>
      </div>
    )
  }
  
}

export default ProductsCart