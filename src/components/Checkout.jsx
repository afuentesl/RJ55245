import { useState } from "react"
import { collection, addDoc} from "firebase/firestore"
import { db } from "../firebase/config"

const Checkout = () => {


	const [values, setValues] = useState({
		name:'',
		address:'',
		email:''
	})

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}


	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(values)

		const orderRef = collection(db, 'orders')

		const orden ={
			cliente: {
				name:'',
				address:'',
				email:''
			},
			items: [],
			date: new Date,
			total: 1
		}

		addDoc(orderRef, orden).then((docRef) => {
			console.log(docRef)

		}).catch((error) => {
			console.log(error)
		})
		.finally(() => {
			console.log('finalizado')
		})

	}
	return (
		<div className="bg-blue-950 grid h-screen">
			<form action="">
				<input type="text" onChange={handleInputChange} value={values.name}  placeholder="Ingrese nombre" />
				<input type="text" onChange={handleInputChange} value={values.address}placeholder="Ingrese dirección" />
				<input type="text" onChange={handleInputChange} value={values.email} placeholder="Ingrese email" />
				<button onClick={handleSubmit}>Enviar</button>
			</form>
		</div>
	)
}

export default Checkout