import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<section className="navbar">
			<article className="navbar__navlinks">
				<ul>
					<NavLink to="/" exact>
						<li>Homepage</li>
					</NavLink>
					<NavLink to="/heroes" exact>
						<li>Heroes</li>
					</NavLink>
					<NavLink to="/cards" exact>
						<li>Cards</li>
					</NavLink>
					<NavLink to="/decktracker" exact>
						<li>Decktracker</li>
					</NavLink>
				</ul>
			</article>
			<article className="navbar__login"></article>
		</section>
	);
};

export default Navbar;
