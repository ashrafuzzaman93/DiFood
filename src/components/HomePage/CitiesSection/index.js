import SectionHeading from "../../common/SectionHeading";
import Citie from "../../common/Citie";
import styles from "./index.module.scss";

const CitiesSection = () => {
	return (
		<div className={styles.availavle__cities}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-4">
						<SectionHeading
							title="Other cities in Bangladesh"
							subtitle="Lorem Ipsum is simply dummy text of the printing."
						/>
					</div>

					<div className="col-xs-12 col-sm-8">
						<div className={styles.cities__wrap}>
							<div className={`${styles.citie__inner} mb-30`}>
								<Citie
									citie="Dhaka"
									url="/"
									src="/images/dhaka-citie.png"
									width="265"
									height="248"
								/>
							</div>

							<div className={`${styles.citie__inner} mb-30`}>
								<Citie
									citie="Sylhet"
									url="/"
									src="/images/sylhet-citie.png"
									width="265"
									height="248"
								/>
							</div>

							<div className={`${styles.citie__inner} mb-30`}>
								<Citie
									citie="Chittagong"
									url="/"
									src="/images/chittagong-citie.png"
									width="265"
									height="248"
								/>
							</div>

							<div className={`${styles.citie__inner} mb-30`}>
								<Citie
									citie="Rajshahi"
									url="/"
									src="/images/rajshahi-citie.png"
									width="265"
									height="248"
								/>
							</div>

							<div className={`${styles.citie__inner} mb-30`}>
								<Citie
									citie="Rangpur"
									url="/"
									src="/images/rangpur-citie.png"
									width="265"
									height="248"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* end: ./row */}
			</div>
		</div>
	);
};

export default CitiesSection;
