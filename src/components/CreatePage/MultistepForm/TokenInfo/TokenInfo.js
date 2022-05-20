import React, {useState, useEffect} from "react";
import { Form, Button, Row } from "react-bootstrap";
import ICOFactory from './icofactory.js'
import { BigNumber } from "ethers";

export default function TokenInfo() {
	const [tokenAmount, setTokenAmount] = useState('');
	const [account, setAccount] = useState();
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);

	const onSubmit = async (event) => {
		event.preventDefault()
		
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'});
		setAccount(accounts[0])
		console.log("ADDRESS: ", accounts[0])

		var _tokenAmount = tokenAmount

		console.log(tokenAmount)
		try{
			const tx = await ICOFactory.methods.createIco(
				_tokenAmount,
			).send({
				from:account
			}) 

			await tx.wait()
			console.log(tx)

		}catch(err){
			setErrorMessage(err.message)
		}
	}

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>
					<strong>Token Amount</strong>
				</Form.Label>
				<Form.Control 
					onChange={event =>setTokenAmount(event.target.value)} 
					type="text" 
					placeholder="Enter Token Amount" />
				<Form.Text className="text-muted">Users Will Pay BNB For Your Token</Form.Text>
			</Form.Group>
			{/* {errorMessage} */}
		</Form>
	);
}


