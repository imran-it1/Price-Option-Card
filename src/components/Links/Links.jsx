import PropTypes from "prop-types";
const Links = ({ route }) => {
	return (
		<li className=" text-base mr-10 mt-1 hover:underline hover:scale-105 underline-offset-1 hover:decoration decoration-indigo-500 hover:underline-offset-2">
			<a href={route.path}>{route.name}</a>
		</li>
	);
};

Links.propTypes = {
	route: PropTypes.object.isRequired,
};

export default Links;
