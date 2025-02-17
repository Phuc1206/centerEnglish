import './App.css';
import Button from './components/Button/Button';
import Popper from './components/Popper/Popper';

function App() {
	function handClick() {
		alert('xuan');
	}
	return (
		<div className='App'>
			<Button onClick={handClick}>Đăng kí</Button>
			<Popper />
		</div>
	);
}

export default App;
