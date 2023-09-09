import { useGlobalContext } from "./Context"
import Loading from "./Loading"
import NavContainer from "./NavContainer"
import ProductsCart from "./ProductsCart"

// components

// items

function App() {
  const {loading}=useGlobalContext()
  
  return (
    <main>
      <NavContainer/>
      {loading && <Loading/>}
      {!loading && <ProductsCart/>}
    </main>
  )
}

export default App
