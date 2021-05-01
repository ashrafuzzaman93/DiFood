import SectionHeading from "../../common/SectionHeading";
import InfoCard from "../../common/InfoCard";
import styles from "./index.module.scss";

import ThumsUp from "../../../icons/thumbs-up.svg";
import UserReview from "../../../icons/user-review.svg";
import Graph from "../../../icons/graph.svg";
import Booking from "../../../icons/booking.svg";

const HowWorks = () => {
	return (
		<div className={styles.how__works_wrap}>
			<div className={styles.pizza__section_devider}>
				<img
					src="/images/pizza-section-devider.png"
					alt="pizza"
					width="363"
					height="348"
					loading="lazy"
				/>
			</div>

			<div className="container">
				<div className="row mb-60">
					<div className="col-xs-12">
						<SectionHeading
							classes="text-white text-center"
							title="How does it work?"
							subtitle="Lorem Ipsum is simply dummy text of the printing."
							isShowLine="true"
							isWhiteColor="true"
						/>
					</div>
				</div>
				{/* end: ./row */}

				<div className="row">
					<div className="col-xs-12 col-sm-3 mb-30">
						<div className="works__process_wrap">
							<InfoCard
								gradient="linear-gradient(144deg, #FFF5AE 0%, #F19B65 92%)"
								src={ThumsUp}
								width="53"
								height="53"
								title="Best Choice"
								description="An unrivalled selection of restaurants for whatever you want."
								isWhiteColor="true"
							/>
						</div>
					</div>

					<div className="col-xs-12 col-sm-3 mb-30">
						<div className="works__process_wrap">
							<InfoCard
								gradient="linear-gradient(180deg, #FF97D9 0%, #FF6E7B 100%)"
								src={UserReview}
								width="73"
								height="73"
								title="User Reviews"
								description="Recommendations and reviews from a powerful community."
								isWhiteColor="true"
							/>
						</div>
					</div>

					<div className="col-xs-12 col-sm-3 mb-30">
						<div className="works__process_wrap">
							<InfoCard
								gradient="linear-gradient(180deg, #3CC2FF 0%, #3D69FF 100%)"
								src={Graph}
								width="65"
								height="65"
								title="Exclusive Benefits"
								description="Offers for many restaurants, and lots of other benefits with our loyalty programme."
								isWhiteColor="true"
							/>
						</div>
					</div>

					<div className="col-xs-12 col-sm-3 mb-30">
						<div className="works__process_wrap">
							<InfoCard
								gradient="linear-gradient(180deg, #B251FF 0%, #8122FF 100%)"
								src={Booking}
								width="54"
								height="63"
								title="Easy Booking"
								description="Instant, free, everywhere. 24/7"
								isWhiteColor="true"
							/>
						</div>
					</div>
				</div>
				{/* end: ./row */}
			</div>
		</div>
	);
};

export default HowWorks;
