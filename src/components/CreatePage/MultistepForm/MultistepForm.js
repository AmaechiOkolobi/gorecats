import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import TokenInfo from "./TokenInfo/TokenInfo";

const [values, setValues] = useState({
	token_address: "",
	currency: "",
});

const [step, setStep] = useState(1);

const nextStep = () => {
	if (step < 3) {
		setStep(step + 1);
	} else if (step === 3) {
		console.log(values);
	}
};

const prevStep = () => {
	if (step > 1) {
		setStep(step - 1);
	}
};

const handleChange = (name) => (e) => {
	setValues({ ...values, [name]: e.target.value });
};

function MultistepForm() {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Card className="p-3 w-50 mt-5">
				<TokenInfo />
			</Card>
		</Container>
	);
}

export default MultistepForm;
