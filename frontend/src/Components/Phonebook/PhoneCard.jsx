import React, { useState } from "react";
import Details from "./Details";

export default function PhoneCard({ imageFileName, name, description, price, manufacturer, processor, ram, screen }) {
	const [isShown, show] = useState(false);
	return (
		<div class="col" onClick={() => show(!isShown)}>
			<div class="card" style={{ width: "18rem" }}>
				<img class="card-img-top" src={`/Images/${imageFileName}`} alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">{name}</h5>
					<Details {...{ description, price, manufacturer, processor, ram, screen }} display={isShown} />
				</div>
			</div>
		</div>
	);
}
