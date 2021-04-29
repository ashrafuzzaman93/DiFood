import styles from "./index.module.scss";
const InfoCard = ({ gradient, src, title, description, isWhiteColor }) => {
	return (
		<div
			className={`${styles.info__card} ${
				isWhiteColor ? styles.white__text_color : ""
			}`}
		>
			<span
				className={styles.info__card_icon}
				style={{ backgroundImage: gradient }}
			>
				<img src={src} alt={title} />
			</span>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default InfoCard;