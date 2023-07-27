import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)

	const { categoryId } = useParams()

	useEffect(() => {
		setLoading(true)

		const productosRef = collection(db, 'productos')

		const q = categoryId ? query(productosRef, where('categoryName', '==', categoryId)) :
			productosRef

		getDocs(q).
			then((data) => {
				const docs = data.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data()
					}
				})
				setProducts(docs)
			}).
			catch((error) => console.log(error)).
			finally(() => setLoading(false));
	}, [categoryId])

	return (
		<div className="pt-40 bg-blue-950 grid h-screen">
			<div>
				{
					loading ?
						<p className="text-yellow-50 font-extrabold text-5xl text-center grid h-screen place-items-center">Cargando...</p> :

						products.length === 0 ?
							<div className="bg-blue-950 grid h-screen"><p className="text-yellow-50 font-extrabold text-5xl text-center ">No hay productos disponibles</p> </div>
							:
							<div className="mx-auto p-6 grid grid-cols-4 gap-4  bg-blue-950" >
								{
									products.map((product) => {
										return <div key={product.id} className="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg ">
											<img className="rounded-lg mb-3 border-black border max-h-30 max-w-2" src={product.img} />
											<h2 className="mb-2 font-bold text-2xl text-center">
												{product.name}
											</h2>
											<p className="text-md text-justify">{product.description}</p>
											<div className="flex flex-wrap mt-auto pt-3 text-xs">
												<p className="mr-2 mb-2 font-bold text-xl">Precio: ${product.price}</p>
											</div>

											<div className="flex flex-col items-center">
												<Link to={`/item/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-middle">Ver detalle</Link>
											</div>
										</div>

									})}
							</div>
				}
			</div>
		</div>
	)
}
export default ItemListContainer