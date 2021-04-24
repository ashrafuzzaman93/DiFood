import SectionHeading from "../SectionHeading";
import FoodItem from "../FoodItem";
import styles from "./index.module.scss";

const Restaurants = () => {
	return (
		<section className={styles.restaurants__wrap}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<SectionHeading
							title="New Restaurants"
							subtitle="Lorem Ipsum is simply dummy text of the printing."
							classes="text-center mb-90"
							isShowLine="true"
						/>
					</div>
				</div>
				{/* end:row */}

				<div className="row">
					<div className="col-sm-4 col-xs-12 mb-30">
						<FoodItem
							url="/"
							src="./images/food01.png"
							discount="10% Off"
							title="Kingsgrove Hote Bistra"
							postId="723"
							ratingStar="3.5"
							excerpt="07 Gorczany Haven Apt. 721"
						/>
					</div>

					<div className="col-sm-4 col-xs-12 mb-30">
						<FoodItem
							url="/"
							src="./images/food02.png"
							discount="30% Off"
							title="Kingsgrove Hote Bistra"
							postId="506"
							ratingStar="4.5"
							excerpt="07 Gorczany Haven Apt. 721"
						/>
					</div>

					<div className="col-sm-4 col-xs-12 mb-30">
						<FoodItem
							url="/"
							src="./images/food03.png"
							discount="20% Off"
							title="Kingsgrove Hote Bistra"
							postId="466"
							ratingStar="4"
							excerpt="07 Gorczany Haven Apt. 721"
						/>
					</div>

					<div className="col-sm-4 col-xs-12 mb-30">
						<FoodItem
							url="/"
							src="./images/food04.png"
							discount="45% Off"
							title="Kingsgrove Hote Bistra"
							postId="233"
							ratingStar="5"
							excerpt="07 Gorczany Haven Apt. 721"
						/>
					</div>

					<div className="col-sm-4 col-xs-12 mb-30">
						<FoodItem
							url="/"
							src="./images/food05.png"
							discount="75% Off"
							title="Kingsgrove Hote Bistra"
							postId="84"
							ratingStar="2.5"
							excerpt="07 Gorczany Haven Apt. 721"
						/>
					</div>

					<div className="col-sm-4 col-xs-12 mb-30">
						<FoodItem
							url="/"
							src="./images/food06.png"
							discount="90% Off"
							title="Kingsgrove Hote Bistra"
							postId="343"
							ratingStar="3"
							excerpt="07 Gorczany Haven Apt. 721"
						/>
					</div>
				</div>
				{/* end: row */}

				<div className="row mt-15">
					<div className="col-xs-12 text-center">
						<a href="/" className="btn btn--primary btn--round">
							See More
						</a>
					</div>
				</div>
				{/* end: ./row */}
			</div>
		</section>
	);
};
export default Restaurants;
