import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { addItemToBasket, decreaseItemCount, increaseItemCount } from '../redux/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { async } from 'q';
import { DeleteCartItem, GetCartItems, PostCartItem, UpdateCartItem } from '../redux/Cart/api_actions';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const dispatch = useDispatch()
    const {
        carts,
        loading,
        error
    } = useSelector((state) => state.cart)

    const getCarts = async () => {
        dispatch(GetCartItems());
    };

    
    useEffect(() => {
        getCarts();
    }, []);
    const addItemToCart = async (item) => {
        console.log('addItemToCart>>.', item)
        // const newItem = item;
        const existingItem = carts?.find(cart => cart.id == item.id);
        // const existingItem = false;
        console.log('existingItem>>.', existingItem)

        if (existingItem) {
            toast.error("Item already exists in the cart");

        } else {
            const newItemWithAdditionalFields = {
                ...item,
                count: 1,
                totalPrice: item.price
            };

            dispatch(PostCartItem(newItemWithAdditionalFields))
            toast.success("Item added to the cart");
        }
    }

    const increaseItemCount = (item) => {
        const { id } = item;
        let foundItem = carts.find((item) => item.id == id)
        if (!foundItem) {
            toast.error('item does not exist')
        } else {
            foundItem = { ...foundItem, count: foundItem.count + 1 , totalPrice: (foundItem.price * (foundItem.count+1)) }
            dispatch(UpdateCartItem({ id, item: foundItem }));
            toast.success("Item updated");

            return;
        }   
    }
    const decreaseItemCount = (item) => {
        const { id } = item;
        let foundItem = carts.find((item) => item.id == id)
        if (!foundItem) {
            toast.error('item does not exist')
        } else {
            if (item.count > 1) {
                foundItem = { ...foundItem, count: foundItem.count - 1,totalPrice: (foundItem.price * (foundItem.count-1))  }
            } else {
                dispatch(DeleteCartItem(id))
                toast.error("Item removed from cart");

                return;
            }
            dispatch(UpdateCartItem({ id, item: foundItem }));
            toast.success("Item updated");

            return;
        }
    }

    const values = {
        addItemToCart,
        increaseItemCount,
        decreaseItemCount,
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
