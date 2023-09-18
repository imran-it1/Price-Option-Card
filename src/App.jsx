import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
	return (
		<>
			<Navbar />
			<PriceOptions />
			<LineChart />
			<BarChart />
		</>
	);
}

export default App;
