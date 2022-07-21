import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    // On Add Function
    const onAdd = (product, quantity) => {
        //Check if item is already in cart
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        //If in cart, simply increase quantity and price
        if(checkProductInCart) {
            // Update states
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

            // Update Cart
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            // Set cart items
            setCartItems(updatedCartItems);
            toast.success(`${qty} ${product.name} added to the cart.`)
        } else {
            // Update states
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

            // Update product quantity if no product already in cart
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
            toast.success(`${qty} ${product.name} added to the cart.`)
        }
    }

    //

    //Function to increase quantity
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    //Function to decrease quantity
      const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1) return 1;

            return prevQty - 1;
        });
    }
   
    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems, 
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd
            }}>
            { children }
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);