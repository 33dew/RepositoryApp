import React from "react";
import styled from "styled-components";
import { logo } from "../../assets/images";

const Navigation: React.FC = () => {

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Nav>
        <NavLink href="#">Loty</NavLink>
        <NavLink href="#">Hotele</NavLink>
        <NavLink href="#">Kontakt</NavLink>
      </Nav>
      <ButtonContainer>
        <LoginButton>Zaloguj</LoginButton>
        <RegisterButton>Zarejestruj</RegisterButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const NavLink = styled.a`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
  margin-right: 100px;

  &:hover {
    color: #828282;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LoginButton = styled.button`
  color: #000000;
  background-color: #fff;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-right: 20px;

  &:hover {
    color: #2c3e50;
  }
`;
const RegisterButton = styled.button`
  background-color: #2980b9;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 3px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;
const Logo = styled.img`
  width: 10em;
`;

export default Navigation;
