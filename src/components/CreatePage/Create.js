import React from "react";
import { Row, Card } from "react-bootstrap";

import TokenInfo from "./MultistepForm/TokenInfo/TokenInfo";

function Create() {
	return (
		<Row className="mt-5 justify-content-center">
			<Card className="p-3 w-75 mt-5">
				<TokenInfo />
			</Card>
		</Row>
	);
}

export default Create;
