import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
	return (
		<div className="scale-90 hover:scale-100">
			<Link className="text-xs text-center font-extrabold" to={"/"}>
				<img className="w-14 h-11" src={logo} alt="Logo" />
				<p className="text-xs text-center font-extrabold">DPM</p>
			</Link>
		</div>
	)
}
export default Logo