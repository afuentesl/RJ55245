import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { IoTrashOutline } from "react-icons/io5";

const CartView = () => {
	const { cart, totalPurchase, clearCart, removeFromCart, totalItemsToPurchase } = useContext(CartContext);

	if (cart.length === 0) {
		return (
			<div className="grid h-full bg-blue-950 place-items-center">
				<div>
					<h2 className="text-4xl text-white">Tu carrito está vacío 🐶 🐱 </h2>
					<br />
					<Link to="/" className="text-white bg-green-700 py-2 px-6 focus:outline-none hover:bg-green-900 rounded w-40">Ir a comprar</Link>
				</div>

			</div>
		)
	}

	return (
		<>
			<div className="grid w-screen place-items-center">
				<h2 className="text-4xl text-white text-center">Resumen de productos</h2>
				<hr />
			</div>

			<div className="grid grid-flow-col">
				<div className=" text-white grid-cols-6">
					{
						cart.map((item) => (
							<div className=" flex bg-cyan-50 border-2 border-gray-200 rounded-lg w-full text-black p-2 m-2 align-middle"
								key={item.id}>

								<div className="">
									<img className="rounded-lg mb-3 border-black border max-h-12 max-w-2 object-left-bottom" src={item.img} alt={item.name} />
								</div>

								<div className="pl-10 align-middle">
									<h3 className="text-xl font-bold text-center">{item.name}</h3>
									<hr />
									<p className="text-l">Precio: ${item.price * item.quantity}</p>
									<p>Cantidad: {item.quantity}</p>
									<button onClick={() => removeFromCart(item.id)} className="bg-red-600 rounded w-8 h-8  text-white flex items-center justify-center">
										<span className="align-middle items-center">	<IoTrashOutline /></span>
										
									</button>
								</div>
							</div>
						))
					}


				</div>

				<div className="flex bg-cyan-50 border-2 border-gray-200 rounded-lg text-black mt-2 mb-2 ml-10 mr-10">

					<div className="place-items-center">
						<p className="text-3xl my-2 text-black text-center">Detalle de la compra</p>
						<br />
						<p className="text-2xl my-2 text-black">Cantidad de productos: {totalItemsToPurchase()}</p>
						<p className="text-2xl my-2 text-black">Total: ${totalPurchase()}</p>
						<button onClick={clearCart} className="text-white bg-red-700 border-0 py-4 px-6 m-3 focus:outline-none hover:bg-red-900 rounded">Vaciar carro</button>
						<Link className="text-white bg-green-700 border-0 py-4 px-6 focus:outline-none hover:bg-red-900 rounded " to="/checkout">Terminar mi compra</Link>
					</div>


				</div>
			</div>
		</>

	)
}

export default CartView