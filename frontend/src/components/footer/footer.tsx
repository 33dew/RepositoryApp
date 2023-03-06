import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>Subscribe to our newsletter for the latest news and exclusive deals.</Text>
      <ButtonsContainer>
        <Button>Polityka Prywatności</Button>
        <Button>Regulamin</Button>
        <Button>Kontakt</Button>
        <Button>Jak rezerwować</Button>
        <Button>Pomoc</Button>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.footer`
  background-color: #ffffff;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-bottom: 30px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #000000;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    color: #ccc;
  }
`;

export default Footer;
