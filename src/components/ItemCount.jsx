const ItemCount = ({ max, quantity, setQuantity, addToCart }) => {


	const handleAddItem = () => {
		quantity < max && setQuantity(quantity + 1)
	}

	const handleSubtractItem = () => {
		quantity > 1 && setQuantity(quantity - 1)
	}

	return (
		<>
			<div className="flex">
				<div className="w-40  pl-2">

					<div className="flex flex-row rounded-lg relative bg-transparent">
						<button
							className=" bg-red-500 hover:bg-red-600 text-white h-full w-20 rounded-l cursor-pointer outline-none"
							onClick={handleSubtractItem}
							disabled={quantity === 1}>
							<span className="m-auto text-3xl font-extrabold">−</span>
						</button>
						<label className="w-full text-center flex items-center justify-center font-semibold text-lg text-black bg-white">{quantity}</label>
						<button
							className="bg-green-500 text-white hover:bg-green-600 h-full w-20 rounded-r cursor-pointer"
							onClick={handleAddItem}
							disabled={quantity === max}>
							<span className="m-auto text-3xl font-extrabold">+</span>
						</button>
					</div>
				</div>
			</div>
			<div>
				<br />
				<div className="flex align-middle pl-2">
					<button
						className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded w-full"
						onClick={addToCart}>Agregar al carro</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount