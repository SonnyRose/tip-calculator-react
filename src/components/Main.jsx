import React, { useState, useEffect } from 'react'
import '../components/Main.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";

const Main = () => {
const [amount,setAmount] = useState(""); 
const [guests, setGuests] = useState("");
const [quality, setQuality] = useState("");
var tip = Number((amount * quality) / (guests)).toFixed(2)


  return (
    <>
    <div className='container'>
    <div className="calculator">
      <h3 className='tip_calculator_name'>Tip Calculator</h3>
      <p className='line_under_name'></p>
      <label htmlFor="amount">Bill Amount</label>
      <br />
      < BsCurrencyDollar className='euro'/>
      <input type="number" id='amount' name='amount' value={amount}  onChange={(e) => setAmount(e.target.value)}/>
      <br />
      <br />
      <label htmlFor="guests">Number of Guests</label>
      <br />
      <BsPeopleFill className='people'/>
      <input type="number" id='guests' value={guests} onChange={(e) => setGuests(e.target.value)}/>
      <br />
      <br />
      <label htmlFor="quality">Service Quality</label>
      <br />
      <select  id="quality" value={quality}  onChange={(e) => setQuality(e.target.value)}>
        <option defaultValue={"0"}>Choose...</option>
        <option value="0.3">30%</option>
        <option value="0.2">20%</option>
        <option value="0.15">15%</option>
        <option value="0.1">10%</option>
        <option value="0.05">5%</option>
      </select>
      <div className="second_line_under_table">
          <p className='line_under_table_2'></p>
      </div>
      <div className="summary">
      <label htmlFor="average_summary">Summary</label>
        <h2 className='summary_number' >Tips : {tip}</h2> 
      </div>
    </div>
    </div>
    </>
  )
}

export default Main