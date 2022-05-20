import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home";
import Create from "./components/CreatePage/Create";

function App() {
	return (
		<>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />}></Route>
			</Routes>
		</>
	);
}

export default App;
