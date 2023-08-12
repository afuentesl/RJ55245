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
		</nav>

	)
}
export default Navbar