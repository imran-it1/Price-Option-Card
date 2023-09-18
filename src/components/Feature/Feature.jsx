import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";
const Feature = ({ feature }) => {
	return (
		<p className=" flex items-center gap-2 mt-2">
			<TiTick className=" text-lg text-green-500" /> {feature}
		</p>
	);
};

Feature.propTypes = {
	feature: PropTypes.string.isRequired,
};

export default Feature;
