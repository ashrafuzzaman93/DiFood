import Facebook from "../../icons/Facebook.svg";
import Twitter from "../../icons/Twitter.svg";
import Linkedin from "../../icons/Linkedin.svg";
import Github from "../../icons/Github.svg";

const SocialNetworks = () => {
	return (
		<div className="socials-networks">
			<ul>
				<li>
					<a href="/" title="Facebook" className="facebook-link">
						<img src={Facebook} alt="Facebook" />
					</a>
				</li>

				<li>
					<a href="/" title="Twitter" className="twitter-link">
						<img src={Twitter} alt="Twitter" />
					</a>
				</li>

				<li>
					<a href="/" title="Linkedin" className="linkedin-link">
						<img src={Linkedin} alt="Linkedin" />
					</a>
				</li>

				<li>
					<a href="/" title="Github" className="github-link">
						<img src={Github} alt="Github" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SocialNetworks;
