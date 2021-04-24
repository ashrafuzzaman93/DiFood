import Header from "./components/Header";
import Banner from "./components/Banner";
import DiFoodSection from "./components/DiFoodSection";
import Restaurants from "./components/Restaurants";
import HowWorks from "./components/HowWorks";
import CitiesSection from "./components/CitiesSection";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<DiFoodSection />
			<Restaurants />
			<HowWorks />
			<CitiesSection />
			<Footer />
		</div>
	);
}

export default App;
