import SectionHeading from "../SectionHeading";
import FoodItem from "../FoodItem";
import styles from "./index.module.scss";

const DiFoodSection = () => {
	return (
		<section className={styles.foods__wrap} id="difood">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<SectionHeading
							title="DiFood Selections"
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
							postId="7"
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
							postId="56"
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
							postId="4656"
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
							postId="23"
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
							postId="784"
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
							postId="3423"
							ratingStar="3"
							excerpt="07 Gorczany Haven Apt. 721"
						/>
					</div>
				</div>
				{/* end: row */}
			</div>
		</section>
	);
};
export default DiFoodSection;
