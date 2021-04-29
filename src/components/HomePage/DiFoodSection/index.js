import SectionHeading from "../../common/SectionHeading";
import FoodItem from "../../common/FoodItem";
import styles from "./index.module.scss";
import data from "../../../data/data";

const DiFoodSection = () => {
	const dataSlice = data.properties.slice(0, 6);
	const item = dataSlice.map((item) => (
		<div className="col-sm-4 col-xs-12 mb-30" key={item._id}>
			<FoodItem
				url={item.slug}
				src={item.picture}
				discount={item.discount}
				title={item.name}
				postId={item._id}
				ratingStar={item.rating.toString()}
				excerpt={item.address}
			/>
		</div>
	));

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

				<div className="row">{item}</div>
				{/* end: row */}
			</div>
		</section>
	);
};
export default DiFoodSection;
