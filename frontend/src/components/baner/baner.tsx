import React from 'react';
import { Text, Button, TextInput } from '@mantine/core';
import image from '../../assets/images/section.jpg'

const FormComponent = () => {
  return (
    <form style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '8px', 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        
    }}>
      <TextInput label="Skąd" placeholder="Wprowadź miejsce podróży" style={{ marginBottom: '16px' }} />
      <TextInput label="Dokąd" placeholder="Wprowadź miejsce podróży" style={{ marginBottom: '16px' }} />
      <div style={{ display: 'flex', gap: '16px' }}>
        <TextInput label="Data od" type="date" style={{ flexGrow: 1 }} />
        <TextInput label="Data do" type="date" style={{ flexGrow: 1 }} />
      </div>
      <Button variant="outline" style={{marginTop: '16px', backgroundColor: "#0072C6", color: "#fff", borderRadius: 20 }}>
        Sprawdź
      </Button>
    </form>
  );
};

const SectionComponent = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={image} alt="baner" style={{ width: '100%', height: 'auto' }} />
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        maxWidth: '600px',
        width: '100%',
        padding: '0 20px'
      }}>
        <FormComponent />
      </div>
    </div>
  );
};

export default SectionComponent;
