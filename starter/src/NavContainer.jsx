import { FaCartPlus } from "react-icons/fa"
import { useGlobalContext } from "./Context"

const NavContainer = () => {
  const { loading, totalAmount } = useGlobalContext()
  return (
    <section className='navContainer'>
      <nav className='navSections'>
        <h3>UseReducer</h3>
        <p className='cartIcon'>
          <FaCartPlus />
        </p>
        <div className='totalAmount'>
          <p>{totalAmount}</p>
        </div>
      </nav>
      <div className='mainTitle'>
        <h2>YOUR BAG</h2>
      </div>
    </section>
  )
}
export default NavContainer
