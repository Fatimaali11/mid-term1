import { createContext, useEffect, useState } from "react";
import { food_list } from '../Food Del Frontend Assets/assets/assets';
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {

    const [cartItems, setCartItem] = useState({});
    
    const addToCart = (itemId) => {

        if (!cartItems[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }

     const getTotalCartAmount = () =>  {
 let totalAmount = 0;
 for (const item in cartItems) {
    
    if(cartItems[item] > 0) {
        let  itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
    }
 }
//  Just 2 mint w8 i checktout this error oh okk but electriclty will go at 10 i have to submit it
return totalAmount;
}
    const contextValue = {
        food_list,
        cartItems,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider