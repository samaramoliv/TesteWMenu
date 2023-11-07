import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/filterodd" activeStyle>
						Filter Odd Numbers
					</NavLink>
					<NavLink to="/fibonacci" activeStyle>
						Fibonacci Sequence
					</NavLink>
					<NavLink to="/filterj" activeStyle>
						Filter J
					</NavLink>
					<NavLink to="/filterpalindrome" activeStyle>
						Filter Palindrome
					</NavLink>
                    <NavLink to="/name-age" activeStyle>
						Name and Age
					</NavLink>
                    <NavLink to="/textcomp" activeStyle>
						Text Component
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;



