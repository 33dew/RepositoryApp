export interface FlightBookingFormProps {
    onSubmit: (data: FlightBookingFormData) => void;
  }
  
  export interface FlightBookingFormData {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
  }
  