import Banner from "../components/HomePage/Banner";
import DiFoodSection from "../components/HomePage/DiFoodSection";
import HowWorks from "../components/HomePage/HowWorks";
import Restaurants from "../components/HomePage/Restaurants";
import CitiesSection from "../components/HomePage/CitiesSection";

const Home = () => {
	return (
		<>
			<Banner />
			<DiFoodSection />
			<Restaurants />
			<HowWorks />
			<CitiesSection />
		</>
	);
};

export default Home;
