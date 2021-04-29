import styles from "./index.module.scss";
import Rating from "../Rating";

const FoodItem = ({
	url,
	src,
	discount,
	title,
	postId,
	ratingStar,
	excerpt,
}) => {
	return (
		<div className={styles.food__item}>
			<div className={styles.food__image_wrap}>
				<a href={url}>
					<img src={src} alt={title} />
				</a>
				<span className={styles.food__discount}>{discount}</span>
			</div>

			<div className={styles.food__info_wrap}>
				<h3 className={styles.food__title}>
					<a href={url}>{title}</a>
				</h3>

				<Rating rating={ratingStar} id={postId} classes="mb-15" />

				<p>{excerpt}</p>
			</div>
		</div>
	);
};
export default FoodItem;
