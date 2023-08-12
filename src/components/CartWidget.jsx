import { Link } from "react-router-dom";
import shoppingCart from "../assets/shopping-cart.svg";
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {

	const { totalItemsToPurchase } = useContext(CartContext);
	return (
		<div className="flex flex-auto">

			<Link className="border-0 focus:outline-none" to="/cart">
				<img className="w-8 h-8 fill-current scale-90 hover:scale-100" src={shoppingCart}></img>
				<div className="text-center rounded-full bg-red-700 text-white w-6 h-6 text-x">{totalItemsToPurchase()}
				</div>
			</Link>
		</div>
	)
}

export default CartWidget;