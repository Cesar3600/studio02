import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from 'components/home'
import Products from 'components/products'
import Contactenos from 'components/contactenos'
const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/contactenos" element={<Contactenos />} />
		</Routes>
	</BrowserRouter>
)

export default App
