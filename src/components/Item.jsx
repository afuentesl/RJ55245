import { Link } from "react-router-dom";

const Item = (props) => {
	const { item } = props;
	return (
		<div key={item.id} className="col-span-1 flex flex-col bg-white border-2 p-1 rounded-lg max-w-md ">
			<img className="rounded-lg mb-3 border-black border max-h-80 max-w-1" src={item.img} />
			<h2 className="mb-2 font-bold text-2xl text-center">
				{item.name}
			</h2>
			<p className="text-md text-justify">{item.description}</p>
			<p className="text-md text-justify">Stock disponible: {item.stock}</p>
			<div className="flex flex-wrap mt-auto pt-3 text-xs">
				<p className="mr-2 mb-2 font-bold text-xl">Precio: ${item.price}</p>
				{item.stock === 0 ?
					<p className="title-font font-medium text-center text-xl text-red-600">Producto sin stock</p> : null}
			</div>

			<div className="grid">
				<Link to={`/item/${item.id}`} className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded align-middle pb-2">Ver detalle</Link>
			</div>
		</div >
	)
}

export default Item;