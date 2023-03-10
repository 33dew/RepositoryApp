import React, { useState } from "react";
import styled from "styled-components";
import { FlightBookingFormProps, FlightBookingFormData } from "./baner.types";
import { section } from "../../assets/images";

const FlightBookingForm: React.FC<FlightBookingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FlightBookingFormData>({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: keyof FlightBookingFormData
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: event.target.value,
    }));
  };

  return (
    <Container>
      <BackgroundImage /> 
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="origin">Skąd:</Label>
          <Input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={(e) => handleChange(e, "origin")}
            required
          />
          <Label htmlFor="destination">Dokąd:</Label>
          <Input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={(e) => handleChange(e, "destination")}
            required
          />
            <Label htmlFor="departure-date">Data od:</Label>
            <Input
              type="date"
              id="departure-date"
              name="departure-date"
              value={formData.departureDate}
              onChange={(e) => handleChange(e, "departureDate")}
              required
            />
            <Label htmlFor="return-date">Data do:</Label>
            <Input
              type="date"
              id="return-date"
              name="return-date"
              value={formData.returnDate}
              onChange={(e) => handleChange(e, "returnDate")}
              required
            />
            <Button type="submit">Sprawdz</Button>
          </Form>
        </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 80vh;
  background-color: #f1f1f1;
`;

const BackgroundImage = styled.div`
  background-image: url(${section});
  background-size: cover;
  background-position: center;
  width: 70%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const FormContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 30%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Label = styled.label`
  color: #333;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #f1f1f1;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2980b9;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;
export default FlightBookingForm;
