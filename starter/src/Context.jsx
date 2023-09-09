import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"
import { LOADING,DISPLAY_ITEMS,CLEAR_DATA, REMOVE_ITEM, ADD_ONE,TAKE_ONE } from "./actions"
import { getTotals } from "./utils"

const AppContext=createContext()

const url = "https://www.course-api.com/react-useReducer-cart-project"
const initialState={
  loading:false,
  cart: new Map()
}

export const AppProvider = ({children}) => {

  const[state,dispatch]=useReducer(reducer,initialState)
  const {totalAmount,totalCost}=getTotals(state.cart)
  console.log("desde aqui", totalAmount, totalCost)
  const clearData=()=>{
      dispatch({type:CLEAR_DATA})
  
    }

  const addOne=(id)=>{
      dispatch({type:ADD_ONE, payload:{id}})
  
    }
  const takeOne=(id)=>{
      dispatch({ type: TAKE_ONE, payload: { id } })
  }

  const removeItem=(id)=>{
      dispatch({type:REMOVE_ITEM, payload:{id}})
  }

  const fetchData=async()=>{
      dispatch({type:LOADING})
      const response=await fetch(url)
      const cart=await response.json()
      dispatch({type:DISPLAY_ITEMS, payload:{cart}})
      
   
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearData,
        removeItem,
        addOne,
        takeOne,
        totalAmount,
        totalCost
      }}
      >
        {children}
    </AppContext.Provider>
   
  )
}



export const useGlobalContext = () => {
  return useContext(AppContext)
}