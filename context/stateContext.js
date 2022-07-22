import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

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

    //Toggle Cart Item Quantity
    const toggleCartItemQuantity = (id, value) => {
        // Find product we are updating - create variable in functional component to store value
            // Loop over cartItems and find matching id
        foundProduct = cartItems.find((item) => item._id === id );
            // Track index of product within cartItems
        index = cartItems.findIndex((product) => product._id === id);

        // Increment and Decrement Qty
        if(value === 'inc') {
            // Update cart items using setter function - do not mutate the state
            let newCartItems = [...cartItems, { ...foundProduct, quantity: foundProduct.quantity + 1} ];
            setCartItems(newCartItems);
                // foundProduct.quantity += 1;
                // cartItems[index] = foundProduct;
            // Set new total price
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            // Set new total quantity
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        } else if(value === 'dec'){
            if (foundProduct.quantity > 1) {
                let newCartItems = [...cartItems, { ...foundProduct, quantity: foundProduct.quantity - 1} ];
                setCartItems(newCartItems);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
            }
        }
    }

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