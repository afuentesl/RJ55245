import { IoLogoWhatsapp, IoMailSharp, IoLogoInstagram } from "react-icons/io5";
const Contacto = () => {
	return (<div className="grid h-screen place-items-center">
		<p className="text-yellow-50 font-extrabold text-3xl ">
			Nos puedes contactar a través de nuestros distintos canales de comunicación:
		</p>
		<ul>
			<li>
				<div className="flex el-align-center text-xl font-bold text-white justify-left">
					<IoLogoWhatsapp /> <p className="pl-2"> Fono o whatsapp: +569 55555555</p>
				</div>
			</li>
			<li>
				<div className="flex el-align-center text-xl font-bold text-white justify-left">
					<IoMailSharp /> <p className="pl-2"> Correo: contacto@dpm.com</p>
				</div>
			</li>
			<li>
				<div className="flex el-align-center text-xl font-bold text-white justify-left">
					<IoLogoInstagram /> <p className="pl-2"> Instagram: @dmp</p>
				</div>
			</li>
		</ul>
	</div>)
}
export default Contacto;