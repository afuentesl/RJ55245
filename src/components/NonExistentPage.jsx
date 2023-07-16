import { Link } from "react-router-dom";

const NonExistentPage = () => {
	return (<div className="grid h-screen place-items-center">
		<p className="text-yellow-50 font-bold text-5xl text-center ">El recurso que estás buscando no existe<br/>
		<Link className="text-red-200 font-extrabold text-5xl text-center underline" to={"/"}>Ir al inicio</Link></p>
	</div>)
}
export default NonExistentPage;