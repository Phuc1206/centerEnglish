import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

export default function DefautLayout({ children }) {
	return (
		<>
			<Header></Header>
			<div>{children}</div>
			<Footer></Footer>
		</>
	);
}
