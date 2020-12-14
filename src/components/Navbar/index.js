import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaTimes, FaBars } from 'react-icons/fa';

// import { Img } from './NavbarElements'
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItems,
  NavLink,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavButton,
//   NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              SCC
            </NavLogo>
            <MobileIcon onClick={handleClick} click={click}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick}>
              <NavItems>
                <NavLink to="/">Home</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/About">About</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/Blog">Blog</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/Menu">Menus</NavLink>
              </NavItems>
              <NavButton> 
                {/* <NavBtnLink to="/sing-up"> */}
                  {/* <Button>Sign-Up</Button> */}
                {/* </NavBtnLink> */}
              </NavButton>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
