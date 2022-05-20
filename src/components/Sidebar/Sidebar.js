import { React, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { Button, Row, Col } from "react-bootstrap";

import "./Sidebar.css";

export default function Sidebar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [account, setAccount] = useState();
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);

	const connectWalletHandler =async () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
			setAccount(accounts[0])
			console.log("ADDRESS: ", accounts[0])
		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

	const chainChangedHandler = () => {
		window.location.reload();
	}

	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	return (
		<>
			<div className="sidebar">
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
				<Row className="menu-bar-row">
					<Col xs={4} sm={7} md={8}>
						<h1
							className=""
							style={{
								fontSize: "30px",
								textAlign: "center",
								color: "white",
							}}
						>
							Kingsale ICO LaunchPad
						</h1>
					</Col>
					<Col xs={8} sm={5} md={4}>
						<Button
							style={{
								backgroundColor: "#091c29",
								color: "#F66B0E",
								borderColor: "#F66B0E",
								outline: "none",
							}}
							className="menu-bar-row-button"
							onClick={connectWalletHandler}
						>
							{connButtonText}
						</Button>
					</Col>
				</Row>

				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul onClick={showSidebar} className="nav-menu-items">
						<li className="sidebar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}
