import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
	const { name, price, features } = option;

	return (
		<div className="bg-gray-700 rounded-xl text-white px-5 py-5 flex flex-col hover:cursor-pointer">
			<div className=" text-center">
				<p className=" text-2xl font-semibold">{name}</p>
				<p className=" text-gray-100">{price}</p>
			</div>

			<div className="my-3">
				{features.map((feature, index) => (
					<Feature key={index} feature={feature} />
				))}
			</div>

			<div className="text-center bg-emerald-600 hover:bg-emerald-500 transition-all duration-500 ease-in-out w-full hover:cursor-pointer rounded-md mt-auto">
				<button className="px-1 py-2">Buy Now</button>
			</div>
		</div>
	);
};

PriceOption.propTypes = {
	option: PropTypes.object.isRequired,
};

export default PriceOption;
