import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section>
      <ReactDatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
    </section>
  );
};

export default Reservations;
