import CartWidget from "./CartWidget"
import Logo from "./Logo"
import NavBarItem from "./NavBarItem"

const Navbar = () => {
	const menuItemList = [
		{
			id: 1,
			text: 'Home',
			url: '#'
		},
		{
			id: 2,
			text: 'Productos',
			url: '#'
		},
		{
			id: 3,
			text: 'Contacto',
			url: '#'
		}
	]

	return (
		<div className="shadow-md w-full fixed top-0 left-0">
			<nav className="flex items-center bg-white p-5 justify-center">
				<ul className="flex items-center">
					<li className="font-bold text-xl text-black mr-5 ml-5"><Logo /></li>
					{menuItemList.map((menuItem) => {
						return <li className="font-bold text-xl" key={menuItem.id}>
							<NavBarItem text={menuItem.text} url={menuItem.url} />
						</li>
					}
					)}
					<li><CartWidget /></li>
				</ul>
			</nav>
		</div>
	)
}
export default Navbar