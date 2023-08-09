import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import ItemList from "./ItemList"

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
							<ItemList productList={products}></ItemList>
				}
			</div>
		</div>
	)
}
export default ItemListContainer