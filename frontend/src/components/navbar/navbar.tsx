import React from 'react';
import { Container, Header, Text } from '@mantine/core';
import logo from '../../assets/images/logo-black.svg'

const NavbarComponent = () => {
  return (
    <Header
      height={60}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="ReservEase" style={{ height: 300 }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <li style={{ marginRight: 100 }}>
            <a href="#flights" style={{ textDecoration: 'none', color: '#000000' }}>
              Loty
            </a>
          </li>
          <li style={{ marginRight: 100 }}>
            <a href="#hotels" style={{ textDecoration: 'none', color: '#000000' }}>
              Hotele
            </a>
          </li>
          <li style={{ marginRight: 100 }}>
            <a href="#cars" style={{ textDecoration: 'none', color: '#000000' }}>
              Samochody
            </a>
          </li>
          <li style={{ marginRight: 200 }}>
            <a href="#contact" style={{ textDecoration: 'none', color: '#000000' }}>
              Kontakt
            </a>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}>
          <button style={{ backgroundColor: '#fff', padding: '10px 20px', borderRadius: 20, border: '1px solid #0072C6', marginRight: 10 }}>
            Zaloguj się
          </button>
          <button style={{ backgroundColor: '#0072C6', padding: '10px 20px', borderRadius: 20, border: 'none', color: '#fff' }}>
            Zarejestruj się
          </button>
        </div>
      </div>
    </Header>
  );
};

export default NavbarComponent;
