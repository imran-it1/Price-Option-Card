import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
	const options = [
		{
			id: 1,
			name: "Basic Plan",
			price: "$29.99/month",
			features: [
				"Access to cardio equipment",
				"Group fitness classes",
				"Locker room access",
				"24/7 gym access",
				"Online workout videos",
			],
		},
		{
			id: 2,
			name: "Premium Plan",
			price: "$49.99/month",
			features: [
				"Access to all gym equipment",
				"Personal trainer sessions (2x/month)",
				"Sauna and spa access",
				"Nutritional guidance",
				"Access to fitness apps",
				"Towel service",
			],
		},
		{
			id: 3,
			name: "Family Plan",
			price: "$79.99/month",
			features: [
				"Access for up to 4 family members",
				"Group fitness classes",
				"Childcare services",
				"24/7 gym access",
				"Family workout sessions",
				"Access to swimming pool",
			],
		},
		{
			id: 4,
			name: "Student Plan",
			price: "$19.99/month",
			features: [
				"Access to cardio equipment",
				"Student ID required",
				"Locker room access",
				"Group fitness classes",
				"Student discounts on supplements",
				"Access to study areas",
			],
		},
		{
			id: 5,
			name: "Corporate Plan",
			price: "Contact for Pricing",
			features: [
				"Customized corporate fitness programs",
				"Access for employees",
				"Fitness challenges and competitions",
				"Wellness workshops",
				"Employee health assessments",
				"Catered healthy meals",
			],
		},
	];

	return (
		<div>
			<h1 className=" text-4xl bg-gray-500 text-center text-white font-semibold mb-2 py-2">
				Best Price in the city
			</h1>

			<div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 container mx-auto mt-10">
				{options.map((option) => (
					<PriceOption key={option.id} option={option} />
				))}
			</div>
		</div>
	);
};

export default PriceOptions;
