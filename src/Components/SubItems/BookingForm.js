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

const { errors, getFieldProps, handleSubmit, handleChange } = useFormik({
  initialValues: {
    date: '',
    occasion: '',
    availableTimes: ' ',
    guests: 1
  },

  validationSchema: Yup.object({
    date: string().required(),
    occasion: string().email().required(),
    availableTimes: string(),
    guests: string().required()
  }),
});

const { value: date } = getFieldProps("props.date");
const { value: occasion } = getFieldProps("props.occasion");
const { value: guests } = getFieldProps("props.guests");
const { value: availableTimes } = getFieldProps("props.state.availableTimes");


  return (
    <>
<VStack>
<Heading as="h1" p={16} >Make a Reservation</Heading>

<Box px={64} rounded="md" w="100%">
<form onSubmit={e =>{
            e.preventDefault();
            handleSubmit(e);
          }}>

  <VStack>
  <FormLabel htmlFor="res-date" >Choose date</FormLabel>
<Input
type="date"
id="res-date"
value={props.date}
onChange={e => props.setDate(e.target.value)}/>

<FormLabel htmlFor="res-time">Choose time</FormLabel>
<Select id="res-time " value={props.state.availableTimes} type="time" onChange={() =>{
  props.dispatch({type: "date_set"})
}}>
{availableTimesList}
</Select>

<h1>{props.state.availableTimes.length}</h1>

<FormLabel htmlFor="guests">Number of guests</FormLabel>
<input
type="number"
placeholder="1" min="1" max="10" id="guests"
value={props.guests}
onChange={e => props.setGuests(e.target.value)}/>
<FormLabel htmlFor="occasion">Occasion</FormLabel>
<Select id="occasion" value={props.occasion} onChange={e => props.setOccasion(e.target.value)}>
   <option>Birthday</option>
   <option>Anniversary</option>
</Select>
<Button type="submit" className='btn-primary'>Make Your reservation</Button>
  </VStack>
</form>
</Box>

</VStack>

    </>
  )
}

export default BookingForm