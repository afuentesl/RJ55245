import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Contacto from './components/Contacto'
import NonExistentPage from './components/NonExistentPage'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './components/Checkout'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'

function App() {
	return (

		<CartProvider>
			<BrowserRouter>
				<div className='min-h-screen bg-blue-950'>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer />}></Route>
						<Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
						<Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
						<Route path="/contacto" element={<Contacto />}></Route>
						<Route path="/cart" element={<CartView />}></Route>
						<Route path="/checkout" element={<Checkout />}></Route>
						<Route path="*" element={<NonExistentPage />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App
