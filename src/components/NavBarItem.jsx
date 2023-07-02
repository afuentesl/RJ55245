const NavBarItem = ({ text, url }) => {
	return (
		<a className="text-xl hover:text-blue-900 mr-6 ml-6" href={url}>{text}</a>
	)
}
export default NavBarItem