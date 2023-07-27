import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../helpers/getData"

const ItemDetailContainer = () => {

	const [loading, setLoading] = useState(true)
	const [product, setProduct] = useState(null)

	const { itemId } = useParams()



	useEffect(() => {
		setLoading(true)
		getProducts().
			then((data) => {
				setProduct(data.find((item) => item.id === parseInt(itemId)))
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
					<div className="items-center bg-blue-950 h-full">
						<section className="text-white body-font overflow-hidden bg-blue-950">
							<div className="container px-5 py-24 mx-auto">
								<div className="lg:w-4/5 mx-auto flex flex-wrap">
									<img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={product.img} />
									<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
										<h2 className="text-sm title-font text-white tracking-widest">{product.categoryName}</h2>
										<h1 className="text-white text-3xl title-font font-medium mb-1">{product.name}</h1>

										<p className="leading-relaxed">{product.description}</p>
										<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">


										</div>
										<div className="flex">
											<span className="title-font font-medium text-2xl text-white">$ {product.price}</span>
											<button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Agregar al carro</button>
											<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
												<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
													<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					:
					<p className="text-yellow-50 font-extrabold text-5xl text-center grid h-screen place-items-center">No se encontró el producto..</p>
			}
		</div >
	)
}
export default ItemDetailContainer;