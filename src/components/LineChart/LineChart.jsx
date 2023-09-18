import {
	LineChart as Lchart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const LineChart = () => {
	const subjectScores = [
		{ studentId: 1, name: "Alice", math: 92, physics: 85, chemistry: 78 },
		{ studentId: 2, name: "Bob", math: 85, physics: 88, chemistry: 75 },
		{ studentId: 3, name: "Charlie", math: 78, physics: 72, chemistry: 80 },
		{ studentId: 4, name: "David", math: 90, physics: 82, chemistry: 88 },
		{ studentId: 5, name: "Eva", math: 88, physics: 90, chemistry: 82 },
		{ studentId: 6, name: "Frank", math: 95, physics: 92, chemistry: 90 },
		{ studentId: 7, name: "Grace", math: 87, physics: 85, chemistry: 79 },
		{ studentId: 8, name: "Hannah", math: 91, physics: 88, chemistry: 84 },
		{ studentId: 9, name: "Ivy", math: 89, physics: 84, chemistry: 89 },
		{ studentId: 10, name: "Jack", math: 94, physics: 92, chemistry: 86 },
	];

	return (
		<div className="container mx-auto mt-24">
			<Lchart width={1000} height={500} data={subjectScores}>
				<Line dataKey="math" stroke="#008000" />
				<Line dataKey="physics" stroke="#00fa9a" />
				<Line dataKey="chemistry" stroke="#3cb371" />
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
			</Lchart>
		</div>
	);
};

export default LineChart;
