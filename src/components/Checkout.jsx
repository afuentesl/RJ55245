import { useContext, useState } from "react"
import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const schema = Yup.object().shape({
	name: Yup.string()
		.min(3, "El nombre es demasiado corto")
		.max(20, "Máximo 20 caracteres")
		.required("Ingrese su nombre."),
	dni: Yup.string()
		.min(7, "El DNI es demasiado corto")
		.max(12, "El DNI es demasiado largo")
		.required("Ingrese su DNI."),
	address: Yup.string()
		.min(6, "La dirección es demasiado corta")
		.max(40, "Máximo 40 caracteres")
		.required("Ingrese la dirección para hacer envío de su pedido."),
	email: Yup.string().email()
		.required("Este campo es obligatorio")
		.email("El email es inválido")
		.required("Ingrese un correo válido de teléfono para contacto."),
	emailRepeat: Yup.string().email().oneOf([Yup.ref("email"), null], "Los emails deben coincidir").required("Debe completar este campo"),
	phoneNumber: Yup.string()
		.min(10, "El número de teléfono es demasiado corto")
		.max(15, "El numero de teléfono es demasiado largo")
		.required("Ingrese un número de teléfono para contacto.")
})


const Checkout = () => {

	const { cart, totalPurchase, clearCart } = useContext(CartContext)

	const [loading, setLoading] = useState(false);
	const [orderId, setOrderId] = useState(null);

	const handleSubmit = async (values) => {
		const order = {
			client: values,
			items: cart.map(item => ({ id: item.id, price: item.price, quantity: item.quantity, name: item.name })),
			date: new Date(),
			totalPurchase: totalPurchase()
		}

		const batch = writeBatch(db)
		const ordersRef = collection(db, "orders")
		const productsRef = collection(db, "products")
		const q = query(productsRef, where(documentId(), "in", cart.map(item => item.id)))

		const products = await getDocs(q)
		const outOfStock = []

		products.docs.forEach((doc) => {
			const item = cart.find(prod => prod.id === doc.id)
			const stock = doc.data().stock

			if (stock >= item.cantidad) {
				batch.update(doc.ref, {
					stock: stock - item.cantidad
				})
			} else {
				outOfStock.push(item)
			}
		})

		if (outOfStock.length === 0) {
			await batch.commit()
			const doc = await addDoc(ordersRef, order)
			setOrderId(doc.id)
			clearCart();
			setLoading(false)
			return;
		}

		alert("No se puede completar la compra, ya que hay productos sin stock.")
	}


	if (orderId) {
		return (
			<div className="grid h-full bg-blue-950 place-items-center">
				<div>
					<h2 className="text-4xl text-white">Tu pedido se realizó con éxito! 🐶🛍️🐱 </h2>
					<br />
					<p className="text-2xl text-white">Tu número de orden es: {orderId}</p>
					<br />
					<Link to="/" className="text-white bg-green-700 py-2 px-6 focus:outline-none hover:bg-green-900 rounded w-40">Ir a comprar</Link>
				</div>

			</div>
		)
	}

	if (loading) {
		return (
			<div className="grid h-full bg-blue-950 place-items-center">
				<div>
					<h2 className="text-4xl text-white">Estamos procesando tu pedido... </h2>
				</div>

			</div>
		)
	}

	return (
		!orderId ?
			<div className="bg-blue-950 grid h-screen w-screen place-items-center">
				<h1 className="text-white text-4xl text-center">Checkout</h1>
				<div className="grid mb-12">
					<Formik
						initialValues={{
							name: '',
							dni: '',
							address: '',
							email: '',
							emailRepeat: '',
							phoneNumber: '',
						}}
						onSubmit={handleSubmit}
						validationSchema={schema}
						>
						{() => (
							<Form>
								<label htmlFor="name" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Nombre:</label>
								<Field type="text"
									name="name"
									className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Ingrese nombre" />
								<ErrorMessage name="name" component="p" className="text-red-500" />

								<label htmlFor="dni" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">DNI:</label>
								<Field type="text"
									className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									name="dni"
									placeholder="Ingrese DNI" />
								<ErrorMessage name="dni" component="p" className="text-red-500" />

								<label htmlFor="address" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Dirección</label>
								<Field type="text"
									className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									name="address"
									placeholder="Ingrese dirección" />
								<ErrorMessage name="address" component="p" className="text-red-500" />

								<label htmlFor="email" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Email</label>
								<Field type="text"
									className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									name="email"
									placeholder="Ingrese email" />
								<ErrorMessage name="email" component="p" className="text-red-500" />

								<label htmlFor="emailRepeat" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Repetir Email</label>
								<Field type="text"
									className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									name="emailRepeat"
									placeholder="Repetir email" />
								<ErrorMessage name="emailRepeat" component="p" className="text-red-500" />

								<label htmlFor="phoneNumber" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Teléfono de contacto</label>
								<Field type="text"
									className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									name="phoneNumber"
									placeholder="Ingrese número de teléfono" />
								<ErrorMessage name="phoneNumber" component="p" className="text-red-500" />

								<div className="grid place-items-center">
									<button className="text-white font-bold bg-green-700 border-0 py-4 px-6 m-3 focus:outline-none hover:bg-green-900 rounded"
									type="submit">Hacer pedido</button>
								</div>

							</Form>
						)}

					</Formik>
				</div>
			</div> : null
	)


}

export default Checkout