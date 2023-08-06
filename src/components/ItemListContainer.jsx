import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import Item from "./Item"

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
		<div className="bg-blue-950 grid h-screen">
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
										return <Item key={product.id} item={product}></Item>

									})}
							</div>
				}
			</div>
		</div>
	)
}
export default ItemListContainer