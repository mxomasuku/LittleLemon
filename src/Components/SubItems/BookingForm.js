import React from 'react'
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import {string} from "yup";


// ! SHOULD PASS STATE DOWN TO BOOKINGS AND BOOK FORM
const BookingForm = (props) =>
 {




  const availableTimesList = props.state.availableTimes.map((time, index)=>
  (<option key={index}>{time}</option>)

)

// const { errors, getFieldProps, handleSubmit, handleChange } = useFormik({
//   initialValues: {
//     date: '',
//     occasion: '',
//     availableTimes: ' ',
//     guests: 1
//   },

//   validationSchema: Yup.object({
//     date: string().required(),
//     occasion: string().email().required(),
//     availableTimes: string(),
//     guests: string().required()
//   }),
// });

// const { value: date } = getFieldProps("props.date");
// const { value: occasion } = getFieldProps("props.occasion");
// const { value: guests } = getFieldProps("props.guests");
// const { value: availableTimes } = getFieldProps("props.state.availableTimes");

const formik = useFormik({
  initialValues: {
    "res-date": '',
    "occasion": '',
    "res-time": ' ',
    "guests": 1
  },
  validationSchema: Yup.object({
        "res-date": string().required(),
        occasion: string().required(),
        availableTimes: string(),
        guests: string().required()
      }),

  onSubmit: (values) => {
    console.log(values)

  }
})

console.log(formik.errors)


  return (
    <>
<VStack>
<Heading as="h1" p={16} >Make a Reservation</Heading>

<Box px={64} rounded="md" w="100%">
<form onSubmit={
            formik.handleSubmit
          }>

  <VStack>
  <FormLabel htmlFor="res-date" >Choose date</FormLabel>
<Input
type="date"
id="res-date"
value={formik.values.date}
onChange={formik.handleChange}/>

{formik.errors['res-date']} ? <p className='error'>{formik.errors['res-date']}</p>

<FormLabel htmlFor="res-time">Choose time</FormLabel>
<Select id="res-time " value={formik.values.time} type="time" onChange={formik.handleChange}>
{availableTimesList}
</Select>
{formik.errors['res-time']} ? <p className='error'>{formik.errors['res-time']}</p>

<h1>{props.state.availableTimes.length}</h1>

<FormLabel htmlFor="guests">Number of guests</FormLabel>
<input
type="number"
placeholder="1" min="1" max="10" id="guests"
value={formik.values.guests}
onChange={formik.handleChange}/>
{formik.errors.guests} ? <p className='error'>{formik.errors.guests}</p>
<FormLabel htmlFor="occasion">Occasion</FormLabel>
<Select id="occasion" value={formik.values.occasion} type="text" onChange={formik.handleChange}>
   <option>Birthday</option>
   <option>Anniversary</option>
</Select>
 {formik.errors.occasion} ? <p className='error'>{formik.errors.occasion}</p>
<Button type="submit" className='btn-primary'>Make Your reservation</Button>
  </VStack>
</form>
</Box>

</VStack>

    </>
  )
}

export default BookingForm