import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FibonacciSequence from './pages/fibonacci';
import FilterJ from './pages/filterj';
import FilterOddNumbers from './pages/filterodd';
import FilterPalindrome from './pages/filterpalindrome';
import NameAge from './pages/name-age';
import TextComp from './pages/text';
import Home from '.';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
        <Route path='/filterodd' element={<FilterOddNumbers />} />
				<Route path='/fibonacci' element={<FibonacciSequence />} />
				<Route path='/filterj' element={<FilterJ />} />
				<Route path='/filterpalindrome' element={<FilterPalindrome />} />
				<Route path='/name-age' element={<NameAge />} />
        <Route path='/textcomp' element={<TextComp />} />
			</Routes>
		</Router>
	);
}

export default App;
