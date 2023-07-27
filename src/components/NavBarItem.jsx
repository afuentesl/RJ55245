import { Link } from "react-router-dom"

const NavBarItem = ({ text, url, style }) => {
	return (
		<Link className={style} to={url}>{text}</Link>
	)
}

export default NavBarItem;