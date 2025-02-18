import styles from './Button.module.css';
import clsx from 'clsx';
export default function Button({ children, ...attribute }) {
	let Comp = 'Button';
	if (attribute.href) {
		Comp = 'a';
	}
	const classes = clsx(styles.button, { [styles.primary]: attribute.primary });
	return (
		<div>
			<Comp className={classes} {...attribute}>
				{children}
			</Comp>
		</div>
	);
}
