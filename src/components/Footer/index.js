import SocialNetworks from "../SocialNetworks";
const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="footer-widget-wrap">
					<div className="row">
						<div className="col-xs-12 col-sm-3">
							<div className="footer-widget">
								<h3>DiFood</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been.
								</p>
							</div>
						</div>

						<div className="col-xs-12 col-sm-4 col-sm-offset-1">
							<div className="footer-widget">
								<h3>Help Links</h3>
								<ul>
									<li>
										<a href="/">About</a>
									</li>
									<li>
										<a href="/">Loyalty programme</a>
									</li>
									<li>
										<a href="/">Contact</a>
									</li>
									<li>
										<a href="/">Terms of Use and Privacy Policy</a>
									</li>
									<li>
										<a href="/">Blog</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-xs-12 col-sm-4">
							<div className="footer-widget">
								<h3>Download App</h3>
								<a href="/">
									<img
										src="./images/app-store-badge.png"
										alt="App Store Badge"
										width="168"
										height="50"
									/>
								</a>
								<br />
								<a href="/">
									<img
										src="./images/google-play-badge.png"
										alt="Google Play Badge"
										width="168"
										height="50"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* end: widget wrap */}

				<div className="sub-footer">
					<div className="row">
						<div className="col-xs-12">
							<SocialNetworks />
						</div>
					</div>
				</div>
				{/* end: sub footer */}
			</div>
		</footer>
	);
};

export default Footer;
