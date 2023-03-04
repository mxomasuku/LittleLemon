import React from 'react'
import BookingForm from '../Components/SubItems/BookingForm'
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
// switch (action.type){
//   case "INCREMENT":
//     return {availableTimes: state.availableTimes, date: state.date}
// case "toggleShowTime": 
//  return {availableTimes: !state.availableTimes, date: state.date}
//  default:
if(action.type === "date_set") return {availableTimes: state.availableTimes}

 return state
}



const BookingPage = () => {
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')

  const initialState = () => {
    const availableTimes = ['17:40', '18:00', '19:00', '20:00', '21:00', '22:00' ]
  }

  const [state, dispatch] = useReducer(reducer, {availableTimes : ['17:40', '18:00', '19:00', '20:00', '21:00', '22:00' ]})

  return (
        <>
  <BookingForm date={date} setDate={setDate} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} state={state} dispatch={dispatch} initialState={initialState} />
        </>
      )
    }

export default BookingPage