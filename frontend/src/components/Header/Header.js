import clsx from 'clsx';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const toggleMenu = () => setOpen(!open);
	const [activeLink, setActiveLink] = useState(location.pathname);
	const classes = {
		wrapper: styles.wrapper,
		inner: styles.inner,
		logo: styles.logo,
		right: clsx(styles.right, { [styles.open]: open }),
		menuButton: styles.menuButton,
	};
	const menuItems = [
		{ path: '/', label: 'Trang chủ' },
		{ path: '/About', label: 'Về chúng tôi' },
		{ path: '/News', label: 'Tin tức' },
		{ path: '/Contact', label: 'Liên hệ' },
	];
	return (
		<header className={classes.wrapper}>
			<div className={classes.inner}>
				<div className={classes.logo}>logo</div>
				<div className={classes.menuButton} onClick={toggleMenu}>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<ul className={classes.right}>
					{menuItems.map((item) => (
						<li key={item.path}>
							<Link
								to={item.path}
								className={clsx(styles.link, {
									[styles.active]: activeLink === item.path,
								})}
								onClick={() => setActiveLink(item.path)}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
