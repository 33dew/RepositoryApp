import React from 'react';
import FlightBookingForm from '../../components/baner/baner';
import { FlightBookingFormData } from '../../components/baner/baner.types';
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navbar/navbar';

const HomePage: React.FC = () => {
  const handleFlightBookingSubmit = (formData: FlightBookingFormData) => {
    console.log(formData);
    // Tu można wykonać żądanie HTTP do API, aby sprawdzić dostępność lotów dla podanych danych.
  };

  return (
    <>
        <Navigation />
        <FlightBookingForm onSubmit={handleFlightBookingSubmit} />
        <Footer />
    </>
  );
};

export default HomePage;
