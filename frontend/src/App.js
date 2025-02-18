import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import News from '~/pages/News/News';
import Contact from '~/pages/Contact/Contact';
import DefautLayout from './components/Layout/DefaultLayout';
function App() {
	return (
		<Router>
			<div className='App'>
				<DefautLayout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/news' element={<News />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</DefautLayout>
			</div>
		</Router>
	);
}

export default App;
