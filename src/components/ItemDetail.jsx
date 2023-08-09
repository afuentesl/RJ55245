import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {

	const { product } = props;
	const { addToCart, isInCart } = useContext(CartContext);
	const [quantity, setQuantity] = useState(1);

	const handleAddItemToCart = () => {
		const newItem = {
			...product,
			quantity
		}
		addToCart(newItem)
	}
	return (
		<div className="items-center bg-blue-950 h-full">
			{Object.prototype.hasOwnProperty.call(product,"categoryName") ?
				<div className="items-center bg-blue-950 h-full">
					<section className="text-white body-font overflow-hidden bg-blue-950">
						<div className="container px-5 py-24 mx-auto">
							<div className="lg:w-4/5 mx-auto flex flex-wrap">
								<img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.img} />
								<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
									<h2 className="text-sm title-font text-white tracking-widest">{product.categoryName}</h2>
									<h1 className="text-white text-3xl title-font font-medium mb-1">{product.name}</h1>

									<p className="leading-relaxed">{product.description}</p>
									<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
									</div>

									<div className="flex">
										<span className="title-font font-medium text-2xl text-white">$ {product.price}</span>
										{!isInCart(product.id) ? <div className="align-middle pl-2">
											<ItemCount max={product.stock} quantity={quantity} setQuantity={setQuantity} addToCart={handleAddItemToCart} />
										</div> : null}

									</div>

									{isInCart(product.id) ?
										<div className="flex py-8 align-middle pl-2">
											<Link to="/cart" className="bg-white text-black border-0 py-2 px-6 focus:outline-none hover:bg-yellow-50 rounded w-full">Ir al carrito</Link>
										</div>
										: null}
								</div>
							</div>
						</div>
					</section >

					<section>

					</section>
				</div> :
				<div className="bg-blue-950 grid h-screen place-items-center">
					<p className="text-yellow-50 font-extrabold text-5xl text-center">No se encontró el producto ingresado 🙀 </p>
				</div>}
		</div>
	)
}

export default ItemDetail;