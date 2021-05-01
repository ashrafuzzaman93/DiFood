import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
	<ContentLoader
		width={"363"}
		height={313}
		viewBox="0 0 363 313"
		backgroundColor="#f0f0f0"
		foregroundColor="#dedede"
		{...props}
	>
		<rect x="0" y="225" rx="4" ry="4" width="290" height="9" />
		<circle cx="6" cy="248" r="6" />
		<circle cx="23" cy="248" r="6" />
		<circle cx="40" cy="248" r="6" />
		<circle cx="57" cy="248" r="6" />
		<circle cx="74" cy="248" r="6" />
		<rect x="0" y="270" rx="3" ry="3" width="220" height="6" />
		<rect x="0" y="282" rx="3" ry="3" width="190" height="6" />
		<rect x="0" y="0" width="100%" height="211" />
	</ContentLoader>
);

export default Loader;
