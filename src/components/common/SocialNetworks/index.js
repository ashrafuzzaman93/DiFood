import Facebook from "../../../icons/Facebook.svg";
import Twitter from "../../../icons/Twitter.svg";
import Linkedin from "../../../icons/Linkedin.svg";
import Github from "../../../icons/Github.svg";

const links = [
	{
		title: "Facebook",
		href: "https://www.facebook.com/",
		src: Facebook,
		width: "13",
		height: "27",
	},
	{
		title: "Twitter",
		href: "https://www.twitter.com/",
		src: Twitter,
		width: "24",
		height: "19",
	},
	{
		title: "Linkedin",
		href: "https://www.linkedin.com/",
		src: Linkedin,
		width: "20",
		height: "19",
	},
	{
		title: "Github",
		href: "https://www.github.com/",
		src: Github,
		width: "18",
		height: "19",
	},
];

const SocialNetworks = () => {
	return (
		<div className="socials-networks">
			<ul>
				{links.map((link) => (
					<li key={link.title}>
						<a
							href={link.href}
							title={link.title}
							rel="noreferrer noopener"
							target="_blank"
							className={link.title.toLowerCase() + "-link"}
						>
							<img
								src={link.src}
								alt={link.title}
								width={link.width}
								height={link.height}
								loading="lazy"
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialNetworks;
