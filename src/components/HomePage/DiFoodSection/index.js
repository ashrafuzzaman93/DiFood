import React, { lazy, Suspense } from "react";
import data from "../../../data/data";
import SectionHeading from "../../common/SectionHeading";
import Loader from "../../common/Loader";
import styles from "./index.module.scss";

const FoodItem = lazy(() => import("../../common/FoodItem"));

const DiFoodSection = () => {
	const dataSlice = data.properties.slice(0, 6);
	const item = dataSlice.map((item) => (
		<div className="col-sm-4 col-xs-12 mb-30" key={item._id}>
			<Suspense fallback={<Loader />}>
				<FoodItem
					url={item.slug}
					src={item.picture}
					width="363"
					height="211"
					discount={item.discount}
					title={item.name}
					postId={item._id}
					ratingStar={item.rating.toString()}
					excerpt={item.address}
				/>
			</Suspense>
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
