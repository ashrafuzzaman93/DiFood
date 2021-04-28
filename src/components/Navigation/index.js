const menus = [
	{ name: "Delivery", href: "/" },
	{ name: "About us", href: "/" },
	{ name: "Menu", href: "/" },
	{ name: "Contact", href: "/" },
];

const Navigation = ({ humberger }) => {
	return (
		<nav className={`primary__navigation ${humberger ? "nav-open" : ""}`}>
			<ul>
				{menus.map((menu) => (
					<li key={menu.name}>
						<a href={menu.href}>{menu.name}</a>
					</li>
				))}
				<li>
					<a href="/" className="btn btn--primary btn--small btn--round">
						Sign in
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
