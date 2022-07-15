import React, {useState} from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import cover from '../images/cover.png'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 10
        }}
    />
);



function Comics() {
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
		<div>
            <h1 className="subtitle" >
                Comics
            <Col xs={10} sm={6} md={4}>
				<Button
					className="menu-bar-row-button"
					onClick={connectWalletHandler}
				>
					{connButtonText}
				</Button>
			</Col>
            </h1>
            <ColoredLine color="white"></ColoredLine>
            
            <Col className="comics">
                <Col>
                <Image className="comics-image" src={cover}>
                
                </Image>
                </Col>
                <Col className="comics-text">
                    <h1 className="book-title">RISE OF THE GORECATS</h1>
                    <h5 className="book-author">By Emmy Winning Partnership Jim Bryson & Adam Jeffcoat</h5>
                    <h3 className="book-description">A sadistic breed of bloodthirsty 
                    critters wreak havoc across the city of catsburg. A washed up detective
                    and his gung ho rookie are the only ones standing in the way of a full
                    invasion. <br/>Gain full access to issue 01 & all future issues by purchasing
                    a limited edition cover on Magic Eden.</h3>
                    <h3 className="book-issue">Issue 01: Released 08/06/2022</h3>
                </Col>
                
            </Col>
            
			
		</div>
        
	);
}

export default Comics;
