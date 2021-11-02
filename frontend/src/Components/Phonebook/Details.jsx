import React from "react";
import Badge from "../common.jsx/Badge";

export default function Details({ description, price, manufacturer, processor, ram, screen, display }) {
	if (display) {
		return (
			<>
				<p class="card-text">{description}</p>
				<Badge label="Price" value={price} />
				<Badge label="Manufacturer" value={manufacturer} />
				<Badge label="Processor" value={processor} />
				<Badge label="RAM" value={ram} />
				<Badge label="Screen" value={screen} />
			</>
		);
	} else {
		return <></>;
	}
}
