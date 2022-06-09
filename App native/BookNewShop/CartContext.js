import React, { useState} from "react";
import { getProduct } from "./Service/Products";


const CartContext = React.createContext();

export const CartProvider = (props) =>{
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([]);

    const addItemToCart = (id, count) => {
        setCount(count)
        const product = getProduct(id);
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id));
            if(!item){
                return [...prevItems, {
                    id, 
                    qty: count,
                    product, 
                    totalPrice: product.price * count
                }]
            }else{
                return prevItems.map((item) => {
                    if(item.id == id){
                        item.qty++;
                        item.totalPrice += product.price;
                    }
                    return item;
                })
            }
        })
    }
    
    const removeItemCart = (id) => {
        setItems( items.filter((item) => {return item.id !== id }))
    }

    const getItemsCount = () => {
        return items.reduce((sum,item) => (sum + item.qty), 0)
    }
    
    const getTotalPrice = () => {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }
   
    return(
        <CartContext.Provider value={{items, getProduct, getTotalPrice, addItemToCart, removeItemCart, count}}>
            {props.children}
        </CartContext.Provider>
    )

    }

export default CartContext;
