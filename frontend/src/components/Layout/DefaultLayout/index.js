import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

export default function DefautLayout({ children }) {
	return (
		<>
			<Header></Header>
			<div className='content'>{children}</div>
			<Footer></Footer>
		</>
	);
}
