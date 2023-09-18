import { useState } from "react";
import Links from "../Links/Links";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const routes = [
		{ id: 1, path: "/", name: "Home" },
		{ id: 2, path: "/about", name: "About" },
		{ id: 3, path: "/services", name: "Services" },
		{ id: 4, path: "/contact", name: "Contact" },
		{ id: 5, path: "/dashboard", name: "Dashboard" },
	];

	const [open, setOpen] = useState(false);

	return (
		<nav className=" mb-10">
			<h1 className=" text-4xl text-teal-500 text-center font-semibold">
				Responsive Navbar
			</h1>

			<div onClick={() => setOpen(!open)} className=" ">
				<div className=" transition-all duration-300 ease-in">
					{open ? (
						<AiOutlineClose className="text-xl" />
					) : (
						<HiMenu className="cursor-pointer text-xl md:hidden" />
					)}
				</div>
			</div>

			<ul
				className={`md:flex absolute md:static  bg-emerald-600  text-white md:bg-white md:text-black rounded-md shadow-lg md:shadow-none pl-2 py-3  transition-all duration-300 ease-in ${
					open ? "top-24 left-0" : "top-24 -left-40"
				}
				`}
			>
				{routes.map((route) => (
					<Links key={route.id} route={route}></Links>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
