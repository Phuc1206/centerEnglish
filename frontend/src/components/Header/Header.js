import clsx from 'clsx';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
	const wrapper = clsx(styles.wrapper);
	const inner = clsx(styles.inner);
	const logo = clsx(styles.logo);
	const right = clsx(styles.right);
	return (
		<header className={wrapper}>
			<div className={inner}>
				<div className={logo}>logo</div>
				<ul className={right}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>About</Link>
					</li>
					<li>
						<Link to='/'>News</Link>
					</li>
					<li>
						<Link to='/'>Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
