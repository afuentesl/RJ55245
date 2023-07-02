import shoppingCart from "../assets/shopping-cart.svg";

const CartWidget = () => {
	return (
		<div className="flex items-center">
			<button>
				<img className="w-8 h-8 fill-current scale-90 hover:scale-100" src={shoppingCart}></img>
			</button>
			<div className="text-center rounded-full bg-red-700 text-white w-6 h-6 text-x">2
			</div>
		</div>
	)
}

export default CartWidget;