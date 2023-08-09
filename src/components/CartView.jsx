import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { IoTrashOutline } from "react-icons/io5";
import { useGetCurrentStockFromDatabase } from "../hooks/useGetCurrentStockFromDatabase";

const CartView = () => {
	const { cart, totalPurchase, clearCart, removeFromCart, totalItemsToPurchase } = useContext(CartContext);

	const { productsFromDb, loading } = useGetCurrentStockFromDatabase();

	const haveInsufficientStock = (item) => {

		if (productsFromDb === undefined) return false;

		const itemStockFromDb = productsFromDb.find((product) => product.id === item.id);
		if (itemStockFromDb === undefined) {
			return true;
		}
		return itemStockFromDb.stock < item.quantity;
	}

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
		loading && cart.length > 0 ?
			<div className="grid h-full bg-blue-950 place-items-center">
				<div>
					<h2 className="text-4xl text-white">Comprobando el stock de los productos en tu carrito 🐶 🐱 </h2>
					<br />
				</div>
			</div> :

			<>
				<div className="grid w-screen place-items-center">
					<h2 className="text-4xl text-white text-center">Resumen de productos</h2>
					<hr />
				</div>

				<div className="grid grid-flow-col">
					<div className=" text-white grid-cols-6">
						{
							cart.map((item) => (
						
									<div key={item.id} className="max-w-sm w-full lg:max-w-full lg:flex pl-4 rounded-lg ">
										<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t lg:rounded-l text-center overflow-hidden" style={{
											backgroundImage: `url(${item.img})`,
										}} title={item.name}>
										</div>
										<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
											<div className="mb-8">
												<p className="text-sm text-gray-600 flex items-center">
													{item.categoryName}
												</p>
												<div className="text-gray-900 font-bold text-xl mb-2">{item.name}</div>
												<p className="text-gray-700 text-base">{item.description}</p>
												<hr />
												<p className="text-gray-700 text-base"><b>Precio: ${item.price * item.quantity}</b></p>
												<p className="text-gray-700 text-base">Cantidad: {item.quantity}</p>
												{haveInsufficientStock(item) ? < p className="text-red-500 text-base" >No hay stock suficiente de este producto</p> : null}
											</div>
											<div className="flex items-center">
												<button onClick={() => removeFromCart(item.id)} className="bg-red-600 rounded w-8 h-8  text-white flex items-center justify-center">
													<span className="align-middle items-center"><IoTrashOutline /></span>
												</button>
											</div>
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
							<button
								onClick={clearCart}
								className="text-white bg-red-700 border-0 py-4 px-6 m-3 focus:outline-none hover:bg-red-900 rounded">Vaciar carro
							</button>
							<Link
								className="text-white bg-green-700 border-0 py-4 px-6 focus:outline-none hover:bg-red-900 rounded "
								to="/checkout">Terminar mi compra
							</Link>
						</div>


					</div>
				</div >
			</>

	)
}

export default CartView