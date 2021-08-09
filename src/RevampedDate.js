import React from "react";

export default function RevampedDate(props) {
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let currentDay =  days[props.date.getDay()];
let currentMonth =  months[props.date.getMonth()];
  let currentDate = props.date.getDate();
  let currentYear = props.date.getFullYear();
  let currentHour = props.date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = props.date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
   
  return (<div>
    {currentDay} - {currentMonth} {currentDate} {currentYear} <br /> {currentHour}:{currentMinutes}
  </div>)
}