import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

	const [loading, setLoading] = useState(true)
	const [product, setProduct] = useState(null)
	const { itemId } = useParams()

	useEffect(() => {
		setLoading(true)
		const itemRef = doc(db, 'productos', itemId)

		getDoc(itemRef).then((doc) => {
			setProduct({
				id: doc.id,
				...doc.data()
			})
		}).
			catch((error) => console.log(error)).
			finally(() => setLoading(false));
	}, [itemId])

	return (
		<div className="grid h-screen">
			{loading ?
				<p className="text-yellow-50 font-extrabold text-5xl text-center grid h-screen place-items-center">Cargando producto..</p>
				:

				product ?
					<ItemDetail product={product} />
					:
					<p className="text-yellow-50 font-extrabold text-5xl text-center grid h-screen place-items-center">No se encontró el producto..</p>
			}
		</div >
	)
}
export default ItemDetailContainer;