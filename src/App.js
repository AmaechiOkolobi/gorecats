import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import Comics from "./Pages/Comics"

function App() {
	return (
		<>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/comics" element={<Comics />}/>
			</Routes>
		</>
	);
}

export default App;
