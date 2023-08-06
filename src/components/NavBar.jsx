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
								<div className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 relative group" key={menuItem.id}>
									<button className="text-gray-700 hover:text-blue-900 group-hover:visible text-xl">{menuItem.text}</button>

									<div className='hidden group-hover:block'>
										<ul className='mt-2 flex flex-col items-center'>
											{menuItem.subCategory.map((subCategory) => {
												return <li className="invisible group-hover:dropdownNavbar" key={subCategory.id}> <NavBarItem text={subCategory.text} url={`category/${subCategory.code}`} style="hover:text-blue-900 invisible group-hover:visible text-xl" /></li>
											})}

										</ul>

									</div>

								</div>

								: <a className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4" key={menuItem.id}><NavBarItem text={menuItem.text} url={menuItem.url} style=" text-gray-700 hover:text-blue-900 text-xl" /></a>

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