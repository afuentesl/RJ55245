import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Contacto from './components/Contacto'
import NonExistentPage from './components/NonExistentPage'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './components/Checkout'

function App() {
	return (
		<BrowserRouter>
			<div className='w-full h-full items-center bg-blue-950'>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />}></Route>
					<Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
					<Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
					<Route path="/contacto" element={<Contacto />}></Route>
					<Route path="/cart" element={<ItemListContainer />}></Route>
					<Route path="/checkout" element={<Checkout />}></Route>
					<Route path="*" element={<NonExistentPage/>}></Route>
				</Routes>
			</div>
		</BrowserRouter>

	)
}

export default App
