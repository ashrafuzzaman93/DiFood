import styles from "./index.module.scss";

const HeaderSection = ({
	title,
	subtitle,
	classes,
	isShowLine,
	isWhiteColor,
}) => {
	return (
		<div
			className={`${styles.section__heading} ${classes} ${
				isShowLine ? styles.line : ""
			} ${isWhiteColor ? styles.white__color : ""}`}
		>
			<h2 className={styles.section__heading_title}>{title}</h2>
			<p className={styles.section__heading_desc}>{subtitle}</p>
		</div>
	);
};
export default HeaderSection;
