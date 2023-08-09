import CartWidget from "./CartWidget"
import Logo from "./Logo"
import NavBarItem from "./NavBarItem"
import '../App.css'
import { useState } from "react"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuItemList = [
		{
			id: 1,
			text: 'Home',
			url: '/',
			subCategory: []
		},
		{
			id: 2,
			text: 'Productos',
			url: '#',
			subCategory: [
				{
					id: 1,
					text: 'Comida para perros',
					code: 'comida-perros',
				},
				{
					id: 2,
					text: 'Comida para gatos',
					code: 'comida-gatos',
				}
			]
		},
		{
			id: 3,
			text: 'Contacto',
			url: '/contacto',
			subCategory: []
		}
	]

	return (

		// <nav aria-label="primary" className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">

		// 	<div className="relative group">
		// 		<button className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
		// 			<span>First Dropdown</span>
		// 		</button>
		// 		<div className="absolute z-10 hidden bg-grey-200 group-hover:block">

		// 			<div className="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
		// 				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
		// 					<p>
		// 						dropdown content here
		// 					</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>

		// </nav>




		<nav className="flex items-center justify-between flex-wrap p-6 bg-white">
			<div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
				<Logo></Logo>
			</div>
			<div className="block lg:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
				>
					<svg
						className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
					<svg
						className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
					</svg>
				</button>
			</div>
			<div
				className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
			>
				<div className="text-sm lg:flex-grow">

					{
						menuItemList.map((menuItem) => {
							return menuItem.subCategory.length > 0 ?
								<div className="relative group block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4" key={menuItem.id}>
									<button className="flex flex-row items-center w-fullblock text-gray-700 hover:text-blue-900 text-xl mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
										<span>{menuItem.text}</span>
									</button>
									<div className="absolute z-10 hidden bg-white group-hover:block rounded border">
										{menuItem.subCategory.map((subCategory) => {
											return <div key={subCategory.id}className="px-2 pt-2 pb-2 bg-white bg-white shadow-lg">
												<div className="">
													<NavBarItem text={subCategory.text} url={`category/${subCategory.code}`} style="hover:text-blue-900 invisible group-hover:visible text-xl" />
												</div>
											</div>
										})}
									</div>
								</div>
								: <div className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4" key={menuItem.id}><NavBarItem text={menuItem.text} url={menuItem.url} style=" text-gray-700 hover:text-blue-900 text-xl" /></div>

						})
					}
				</div>
				<div>
					<CartWidget />
				</div>
			</div>
		</nav>

	)
}
export default Navbar