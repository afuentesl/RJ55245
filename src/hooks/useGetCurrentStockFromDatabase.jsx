import { collection, documentId, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export const useGetCurrentStockFromDatabase = async () => {
	const { cart } = useContext(CartContext);
	const [productsFromDb, setProductsFromDb] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		async function getCurrentStock() {
			const productsRef = collection(db, "productos")
			const q = query(productsRef, where(documentId(), "in", cart.map((item) => item.id)));
			const productsFromDb = await getDocs(q)
			return productsFromDb;
		}

		getCurrentStock().then((productCurrentStock) => {
			setProductsFromDb(productCurrentStock);
			return productsFromDb;
		}).catch(() => {
			setProductsFromDb([]);
			
		}).finally(() => {
			setLoading(false);
		});
	}, [])

}