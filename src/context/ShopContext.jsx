import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const navigate = useNavigate();
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : {};
    });

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size', {
                autoClose: 1000,
                hideProgressBar: true,
            });
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

        toast.success('added to cart!', {
            autoClose: 1000,
            hideProgressBar: true,
        });
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = parseInt(quantity);
        
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            let itemsInfo = products.find((product) => product._id === items);
            for (const item in cartItems[[items]]) {
                try {
                 if (cartItems[items][item] > 0) {
                    totalAmount += itemsInfo.price * cartItems[items][item];
                 }
                } catch (error) {
                    
                }
            }
        }

        return totalAmount;
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, 
        updateQuantity, getCartAmount,
        navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider