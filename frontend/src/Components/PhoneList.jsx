import React from "react";
import PhoneCard from "./Phonebook/PhoneCard";

export default function PhoneList({ phones }) {
	return (
		<div class="row">
			{phones.map(({ imageFileName, name, description, price, manufacturer, processor, ram, screen }) => (
				<PhoneCard {...{ imageFileName, name, description, price, manufacturer, processor, ram, screen }} />
			))}
		</div>
	);
}
