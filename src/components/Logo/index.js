import React, { useState } from "react";

const Logo = () => {
	let [humberger, handleHubberger] = useState(false);

	return (
		<div className="brand-logo">
			<a href="/">
				<img src="./images/logo.png" width="134" height="31" alt="DiFood" />
			</a>

			<button
				className={`humberger ${humberger ? "nav-open" : ""}`}
				onClick={() => handleHubberger((humberger = !humberger))}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	);
};

export default Logo;
