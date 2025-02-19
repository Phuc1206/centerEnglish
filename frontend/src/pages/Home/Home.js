import CardContent from '~/components/CardContent/CardContent';
import styles from './Home.module.scss';
export default function Home() {
	const classes = {
		wrapper: styles.wrapper,
		backGroundOverLay: styles.background,
	};
	return (
		<div className={classes.wrapper}>
			<div className={classes.backGroundOverLay}></div>
			<CardContent></CardContent>
		</div>
	);
}
