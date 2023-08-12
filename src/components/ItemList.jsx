import Item from "./Item";

const ItemList = (props) => {
 const {productList} = props
	return (
		productList.length ===0 ? <div className="bg-blue-950 grid h-screen place-items-center"><p className="text-yellow-50 font-extrabold text-5xl text-center ">No hay productos disponibles 🙀 </p> </div>
			:
			<div className="mx-auto p-6 grid grid-cols-4 gap-4  bg-blue-950">
				{
					productList.map((product) => {
						return <Item key={product.id} item={product}></Item>
					})}
			</div>
)}
export default ItemList;