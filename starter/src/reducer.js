import { LOADING,DISPLAY_ITEMS, CLEAR_DATA, REMOVE_ITEM, ADD_ONE,TAKE_ONE} from "./actions"

const reducer=(state,action)=>{
    if (action.type===LOADING){
        return {...state,loading:true}
    }
    
    if (action.type===DISPLAY_ITEMS){
        const newCart= new Map(action.payload.cart.map((item)=>[item.id,item]))
        return {...state,loading:false,cart:newCart}
    }

    if (action.type===CLEAR_DATA){       
        return {...state,cart:new Map()}
    }

    if (action.type===REMOVE_ITEM){  
        const newCart= new Map(state.cart)
        const removeId=action.payload.id
        newCart.delete(removeId)
        return {...state,cart:newCart}
    }

    if (action.type===ADD_ONE){  
        const newCart= new Map(state.cart)
        const selectId=action.payload.id
        const modifyItem=newCart.get(selectId)
        const item={...modifyItem,amount:modifyItem.amount+1}
        newCart.set(selectId,item)
        return {...state,cart:newCart}
    }

    if (action.type===TAKE_ONE){  
        const newCart= new Map(state.cart)
        const selectId=action.payload.id
        const modifyItem=newCart.get(selectId)
        if (modifyItem.amount>1){
        const item={...modifyItem,amount:modifyItem.amount-1}
        newCart.set(selectId,item)
        return {...state,cart:newCart}
    }else{
            newCart.delete(selectId)
            return {...state,cart:newCart}

        }
    }

    return state
}

export default reducer