import styles from "./index.module.scss";

const Citie = ({ citie, url, src, width, height }) => {
	return (
		<a href={url} className={styles.citie}>
			<figure>
				<img src={src} width={width} height={height} alt={citie} />
				<figcaption>
					<h4>{citie}</h4>
				</figcaption>
			</figure>
		</a>
	);
};

export default Citie;
