import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => (
	<div>
        <span>
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			{/* <div className='container-fluid'>
            
				<span className='navbar-brand display-1' href='#'>
					eARth
				</span>
			</div> */}
			
			<div className='bar' id='navbarNav'>
				{false ? (
					<ul className='navbar-nav'>
						<Link to='/' className='nav-item nav-link'>
							Profile
						</Link>
						{/* <a href='#' className='nav-item nav-link' onClick={handleClick}>
							Logout
						</a> */}
                        <p>Logout</p>
						<Link to='/upload' className='nav-item nav-link'>
							Upload
						</Link>
					</ul>
				) : (
					<ul className='navbar-nav'>
						{/* The navbar will show these links before you log in */}
						<Link to='/' className='nav-item nav-link'>
							Home
						</Link>
						<Link to='/login' className='nav-item nav-link'>
							Login
						</Link>
						<Link to='/signup' className='nav-item nav-link'>
							Sign Up
						</Link>
					
					</ul>
				)}
			</div>
		</nav>
		<hr />
        </span>
	</div>
);

