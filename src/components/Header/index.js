import Logo from "../Logo";
import Navigation from "../Navigation";
const Header = () => {
	return (
		<header className="site-header">
			<div className="container">
				<div className="row middle-xs">
					<div className="col-xs-12 col-md-3">
						<Logo />
					</div>

					<div className="col-xs-12 col-md-9">
						<Navigation />
					</div>
				</div>
				{/* end: row */}
			</div>
		</header>
	);
};

export default Header;
