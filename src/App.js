import Header from "./components/Header";
import Banner from "./components/Banner";
import DiFoodSection from "./components/DiFoodSection";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<DiFoodSection />
			<Footer />
		</div>
	);
}

export default App;
