import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
	return (
		<div className='w-full h-screen items-center bg-gradient-to-b from-blue-900'>
			<NavBar />
			<ItemListContainer greeting={"Bienvenidos! a nuestra Distribuidora de Productos para Mascotas 🐾."} />
		</div>

	)
}

export default App
