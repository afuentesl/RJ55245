import CartWidget from "./CartWidget"
import Logo from "./Logo"
import NavBarItem from "./NavBarItem"
import '../App.css'

const Navbar = () => {
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
		<div className="shadow-md w-full fixed top-0 left-0 bg-white">
			<nav className="border-gray-200">
				<div className="container mx-auto flex flex-wrap items-center justify-between">
					<Logo />

					<button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
						<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</button>
					<div className="hidden md:block w-full md:w-auto " id="mobile-menu">


						<ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
							{
								menuItemList.map((menuItem) => {
									return menuItem.subCategory.length > 0 ?
										<ul className="group" key={menuItem.id}>
											<button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-900 md:p-0 text-xl flex items-center justify-between w-full md:w-auto">{menuItem.text} <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

											{menuItem.subCategory.map((subCategory) => {
												return <li className="invisible group-hover:dropdownNavbar" key={subCategory.id}> <NavBarItem text={subCategory.text} url={`category/${subCategory.code}`} style="hover:text-blue-900 invisible group-hover:visible text-xl"/></li>
											})}
										</ul> : <li key={menuItem.id}><NavBarItem text={menuItem.text} url={menuItem.url} style=" text-gray-700 hover:text-blue-900 text-xl"/></li>

								})
							}
							<li><CartWidget /></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>

	)
}
export default Navbar