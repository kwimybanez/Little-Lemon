import React from 'react';
import { useFormik } from 'formik';
import { Datepicker } from 'flowbite-react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Form = () => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const availableTimes = [
    '11:00 am',
    '11:30 am',
    '12:00 nn',
    '12:30 pm',
    '1:00 pm',
    '1:30 pm',
    '2:00 pm',
    '2:30 pm',
    '3:00 pm',
    '3:30 pm',
    '4:00 pm',
    '4:30 pm',
    '5:00 pm',
    '5:30 pm',
    '6:00 pm',
    '6:30 pm',
    '7:00 pm',
    '7:30 pm',
    '8:00 pm',
    '8:30 pm',
    '9:00 pm',
  ];

  const guestNum = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const handleSubmit = (values) => {
    // Extract only the date portion from the selected date
    const selectedDate = values.selectedDate.toISOString().split('T')[0];

    // Create a new object with only the necessary fields
    const formData = {
      selectedDate,
      selectedTime: values.selectedTime,
      selectedGuest: values.selectedGuest,
      selectedOccasion: values.selectedOccasion,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      contactNumber: values.contactNumber,
      termsChecked: values.termsChecked,
    };

    // Convert to JSON
    const jsonData = JSON.stringify(formData);

    // Push to a local JSON file or perform any other action
    console.log(jsonData);
  };

  const validationSchema = Yup.object().shape({
    selectedDate: Yup.date().required('*Please select a date'),
    selectedTime: Yup.string().required('*Please select a time'),
    selectedGuest: Yup.string().required('*Please select the number of guests'),
    firstName: Yup.string().required('*Please enter your first name'),
    lastName: Yup.string().required('*Please enter your last name'),
    email: Yup.string().email('Invalid email address').required('*Please enter your email'),
    contactNumber: Yup.string().required('*Please enter your contact number'),
    termsChecked: Yup.boolean().oneOf([true], '*Please agree to the terms and conditions'),
  });

  const formik = useFormik({
    initialValues: {
      selectedDate: new Date(),
      selectedTime: '',
      selectedGuest: '',
      selectedOccasion: '',
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      termsChecked: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className='text-neutral-100 text-xl pb-3 border-b border-neutral-100/40 mb-6'>
        Booking Details
      </h1>
      <div className='sm:space-y-4 md:grid md:grid-cols-2 sm:gap-4 xl:gap-4 md:space-y-0 pb-4'>
        <div>
          <label className='text-neutral-100'>Select Date:</label>
          <Datepicker
            className='text-md'
            minDate={new Date()}
            maxDate={maxDate}
            selected={formik.values.selectedDate}
            onChange={(date) => formik.setFieldValue('selectedDate', date)}
          />
          {formik.errors.selectedDate && formik.touched.selectedDate && (
            <div className='mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
              {formik.errors.selectedDate}
            </div>
          )}
        </div>
        <div>
          <label className='text-neutral-100'>Select Time:</label>
          <select
            value={formik.values.selectedTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='selectedTime'
            className='bg-white border border-gray-300 rounded-lg w-full'>
            <option value='' disabled hidden>
              Select Time*
            </option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          {formik.errors.selectedTime && formik.touched.selectedTime && (
            <div className='mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
              {formik.errors.selectedTime}
            </div>
          )}
        </div>
        <div>
          <label className='text-neutral-100'>Number of Guests:</label>
          <select
            value={formik.values.selectedGuest}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='selectedGuest'
            className='bg-white border border-gray-300 rounded-lg px-4 w-full'>
            <option value='' disabled hidden>
              Select Guest No.*
            </option>
            {guestNum.map((num, index) => (
              <option key={index} value={num}>
                {num}
              </option>
            ))}
          </select>
          {formik.errors.selectedGuest && formik.touched.selectedGuest && (
            <div className='mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
              {formik.errors.selectedGuest}
            </div>
          )}
        </div>
        <div>
          <label className='text-neutral-100'>Special Occasion:</label>
          <select
            value={formik.values.selectedOccasion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='selectedOccasion'
            className='bg-white border border-gray-300 rounded-lg w-full'>
            <option value='' disabled hidden>
              Select Occasion (optional)
            </option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Date Night</option>
            <option>Business Meal</option>
            <option>Celebration</option>
            <option>I'd rather not say</option>
          </select>
        </div>
      </div>
      <div>
        <label className='block text-neutral-100' htmlFor='special request'>
          Special Request:
        </label>
        <textarea
          className='bg-white border border-gray-300 rounded-lg w-full'
          name='special request'
          placeholder='Add a special request (optional)'></textarea>
      </div>
      <h1 className='text-neutral-100 text-xl mt-6 pb-3 border-b border-neutral-100/40 mb-6'>
        Contact Information
      </h1>
      <div className='w-full pb-4'>
        <label className='text-neutral-100'>First Name:</label>
        <input
          className='bg-white border border-gray-300 rounded-lg w-full'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='firstName'
          type='text'
          placeholder='Enter First Name*'
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <div className='mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
            {formik.errors.firstName}
          </div>
        )}
      </div>
      <div className='w-full pb-4'>
        <label className='text-neutral-100'>Last Name:</label>
        <input
          className='bg-white border border-gray-300 rounded-lg w-full'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='lastName'
          type='text'
          placeholder='Enter Last Name*'
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <div className='mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
            {formik.errors.lastName}
          </div>
        )}
      </div>
      <div className='sm:space-y-4 md:grid md:grid-cols-2 sm:gap-4 xl:gap-4 md:space-y-0 pb-4'>
        <div className='w-full'>
          <label className='text-neutral-100'>Email:</label>
          <input
            className='bg-white border border-gray-300 rounded-lg w-full'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='email'
            type='email'
            placeholder='Email*'
          />
          {formik.errors.email && formik.touched.email && (
            <div className='mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className='w-full pb-2'>
          <label className='text-neutral-100'>Contact Number:</label>
          <input
            className='bg-white border border-gray-300 rounded-lg w-full'
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='contactNumber'
            type='tel'
            placeholder='Contact Number*'
          />
          {formik.errors.contactNumber && formik.touched.contactNumber && (
            <div className='mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
              {formik.errors.contactNumber}
            </div>
          )}
        </div>
      </div>
      <div className='flex items-center'>
        <input
          type='checkbox'
          id='termsCheckbox'
          checked={formik.values.termsChecked}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='termsChecked'
          className='mr-2 rounded-sm'
          required
        />
        <label htmlFor='termsCheckbox' className='text-neutral-100 text-sm'>
          I agree to the{' '}
          <Link to='#' className='hover:underline underline-offset-2 text-lemon'>
            Terms and Conditions
          </Link>
        </label>
        {/* {formik.errors.termsChecked && formik.touched.termsChecked && (
                    <div className='block mt-2 text-red-400 pt-1 pl-1 font-light italic text-sm'>
                      {formik.errors.termsChecked}
                    </div>
                  )} */}
      </div>

      <div className='flex justify-center align-middle pt-6'>
        <button
          type='submit'
          className='bg-lemon hover:bg-highlighted sm:w-full content-center text-black font-semibold py-2 px-4 rounded-lg mt-4 mx-auto'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
