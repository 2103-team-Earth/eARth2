import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => (
	<div>
		<nav >
			<div >
				{false ? (
					<span>
						<Link className="navBar" to='/profile' >
						Profile
						</Link>

						<Link className="navBar" to="/">
						Logout
						</Link>

						<Link className="navBar" to='/upload' >
						Upload
						</Link>

						<Link className="navBar" to='/create' >
							Create
						</Link>
						</span>
				) : (
					<span >
						{/* The navbar will show these links before you log in */}
						<Link className="navBar" to='/' >
							Home
						</Link>

						<Link className="navBar" to='/login'>
							Login
						</Link>

						<Link className="navBar" to='/signup'>
							Sign Up
						</Link>
					
					</span>
				)}
			</div>
		</nav>
		<hr />
	</div>
);

