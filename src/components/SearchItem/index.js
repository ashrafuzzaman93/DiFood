import styles from "./index.module.scss";

const SearchItem = () => {
	return (
		<div className={styles.search__wrap}>
			<form>
				<div className={styles.input__wrap}>
					<input type="text" placeholder="What" />
				</div>

				<div className={styles.input__wrap}>
					<input type="text" placeholder="Where" />
				</div>

				<button
					type="submit"
					className={`btn btn--primary ${styles.custom__btn}`}
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchItem;
