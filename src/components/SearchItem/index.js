import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Rating from "../Rating";
import data from "../../data/data";
import styles from "./index.module.scss";

const SearchItem = () => {
	let [isSearcing, setSearching] = useState(false);
	let [searchData, findSearchData] = useState([]);
	// let [displayMessage, setMessage] = useState("");

	const handleChange = (event) => {
		const searchQuery = event.target.value;

		if (searchQuery !== "" && searchQuery.length >= 3) {
			setSearching((isSearcing = true));

			findSearchData(() => {
				let filterData;
				if (event.target.name === "food") {
					filterData = data.properties.filter((item) =>
						item.name.includes(event.target.value)
					);
				} else {
					if (event.target.name === "location") {
						filterData = data.properties.filter((item) =>
							item.city.includes(event.target.value)
						);
					}
				}

				return filterData;
			});
		} else {
			setSearching((isSearcing = false));
		}
	};

	const handleSubmit = (event) => event.preventDefault();

	const item = searchData.map((item) => (
		<div key={item._id} className={styles.search__single_item}>
			<div className={styles.search__item_pic}>
				<a href="/">
					<img src={item.picture} alt={item.name} />
				</a>
			</div>
			<div className={styles.search__item_summery}>
				<h3>
					<a href="/">{item.name}</a>
				</h3>
				<Rating rating={item.rating.toString()} id={item._id} classes="mb-5" />
				<p>{item.address}</p>
			</div>
		</div>
	));

	return (
		<div className={styles.search__wrap}>
			<form onSubmit={handleSubmit}>
				<div className={styles.input__wrap}>
					<input
						type="search"
						name="food"
						placeholder="What"
						onChange={handleChange}
					/>
				</div>

				<div className={styles.input__wrap}>
					<input
						type="search"
						name="location"
						placeholder="Where"
						onChange={handleChange}
					/>
				</div>

				<button
					type="submit"
					className={`btn btn--primary ${styles.custom__btn}`}
				>
					Search
				</button>
			</form>

			<CSSTransition
				in={isSearcing}
				timeout={300}
				classNames="fade"
				unmountOnExit
			>
				<div className={styles.display_search_items}>{item}</div>
			</CSSTransition>
		</div>
	);
};

export default SearchItem;
