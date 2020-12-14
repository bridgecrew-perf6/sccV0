import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../components/globalStyles';
import { FaMandalorian } from 'react-icons/fa';

export const Nav = styled.nav`
  background-color: red;
  color: #fff;
  height: 80px;
  z-index: 999;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  position: sticky;
  top: 0;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 20px;
  ${Container}
`;
export const NavLogo = styled(Link)`
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  justify-self: flex-start;
  display: flex;
  font-size: 2.5rem;
  align-items: center;
  text-decoration: none;
`;
export const NavIcon = styled(FaMandalorian)`
  margin-right: 0.5rem;
  display: flex;
  font-size: 40px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: px) {
    display: flex;
    font-size: 1.5rem;
    positoin: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transform: translate(-100%, 50%);
    font-size: 1.2rem;
  }
`;
export const IconContext = styled.div`
  display: flex;
  height: 1rem;
  margin: 0 auto;
  text-decoration: none;
  align-items: center;
  width: 100%;
`;
export const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  text-align: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 100%;
    top: 70px;
    left: ${({ click }) => (click ? 0 : '-100px')};
    opacity: 1;
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  /* position: relative; */
  /* margin: 0 0 0.5rem; */
  padding: 0.2rem 1rem;
  @media screen and(max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #16a050;
      transition:all 0.3s ease;
    }
  }
`;

export const NavItems = styled.li`
  height: 70px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid #eaefff;
  }
  @media screen and(min-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const NavButton = styled(Button)`
height: 20px solid;
width: 100%;
cursor: pointer;
background: none;
color: #ffffff;

`