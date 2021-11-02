import React from "react";

export default function Badge({ label, value }) {
	return (
		<span class="badge mr-1 badge-secondary">
			{label}: <span class="badge badge-light">{value}</span>
		</span>
	);
}
