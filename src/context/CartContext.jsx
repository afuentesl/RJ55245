import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(init);

	const addToCart = (item) => {
		setCart([...cart, item]);
	};

	const removeFromCart = (itemId) => {
		setCart(cart.filter((item) => item.id !== itemId));
	}

	const isInCart = (itemId) => {
		return cart.some((item) => item.id === itemId);
	}

	const clearCart = () => {
		setCart([]);
	}

	const totalItemsToPurchase = () => {
		if(cart.length === 0) return 0;

		return cart.reduce((acc, item) => acc + item.quantity, 0);
	}

	const totalPurchase = () => {
		return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<CartContext.Provider value={{
			cart,
			addToCart,
			isInCart,
			totalPurchase,
			clearCart,
			totalItemsToPurchase,
			removeFromCart
		}}>
			{children}
		</CartContext.Provider>
	);

}