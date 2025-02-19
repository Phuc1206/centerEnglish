import styles from './CardContent.module.scss';
function CardContent() {
	const classes = {
		container: styles.container,
	};
	return <div className={classes.container}>Content</div>;
}

export default CardContent;
