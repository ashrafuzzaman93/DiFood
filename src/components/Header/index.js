import React, { useState } from "react";
import Navigation from "../common/Navigation";
const Header = () => {
	let [humberger, handleHubberger] = useState(false);

	return (
		<header className="site-header">
			<div className="container">
				<div className="row middle-xs">
					<div className="col-xs-12 col-md-3">
						<div className="brand-logo">
							<a href="/">
								<img
									src="./images/logo.png"
									width="134"
									height="31"
									alt="DiFood"
								/>
							</a>

							<button
								className={`humberger ${humberger ? "humberger-open" : ""}`}
								onClick={() => handleHubberger((humberger = !humberger))}
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
					</div>

					<div className="col-xs-12 col-md-9">
						<Navigation humberger={humberger} />
					</div>
				</div>
				{/* end: row */}
			</div>
		</header>
	);
};

export default Header;
