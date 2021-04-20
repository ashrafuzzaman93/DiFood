import SearchItem from "../SearchItem";
import ArrowBottom from "../../icons/ArrowBottom.svg";
import styles from "./index.module.scss";

const Banner = () => {
	return (
		<div className={styles.banner__wrapper}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className={`text-center ${styles.banner__text}`}>
							<h1>
								Discover and book the best
								<br />
								<span className="highlight-text"> restaurant</span>
							</h1>
						</div>
						<SearchItem />
						<div className={`text-center ${styles.scroll__down}`}>
							<a href="/">
								<img src={ArrowBottom} alt="scroll down" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
