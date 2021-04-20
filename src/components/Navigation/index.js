const menus = [
	{ name: "Get Work", href: "/" },
	{ name: "Get Paid", href: "/" },
	{ name: "Get Started", href: "/" },
];

const Navigation = () => {
	return (
		<nav className="primary__navigation">
			<ul>
				{menus.map((menu) => (
					<li key={menu.name}>
						<a href={menu.href}>{menu.name}</a>
					</li>
				))}
				<li>
					<a href="/" className="btn btn--primary btn--small btn--round">
						Chat Now
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
