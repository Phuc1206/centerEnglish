import './Button.css';
export default function Button({ children, ...attribute }) {
	let Comp = 'Button';
	if (attribute.href) {
		Comp = 'a';
	}

	return (
		<div>
			<Comp className='button' {...attribute}>
				{children}
			</Comp>
		</div>
	);
}
