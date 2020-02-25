import React from 'react';
import './App.css';
import fiat from './img/mcqueen.jpg';
import kia from './img/mater.jpg';
import audi from './img/blue.jpeg';
import suzuki from './img/sally.jpeg';


// Highest level
const Header = () => {
  return (
    <div className="header">
      <h1 className="headerOne">Latest brand new car deals</h1>
      <p className="moreDeals">View more deals &rarr;</p>
    </div>
  )
}

// card content
const Image = (props) => {
  return (
    <div>
      <img className="carImages" src={props.carImage} alt="car"/>
    </div>
  )
}

const MidSection = (props) => {
  return (
    <div>
      <Image carImage = {props.carImage} />
      <p className="originalPrice"> RPP <br /> £{props.originalPrice}</p>
      <p className="currentPrice"> £{props.currentPrice}</p>
      <p className="save"> save <span className="savebox"> £{props.save}</span></p>
    </div>
  )
}


const BottomSection = (props) => {
  return (
    <div>
      <h2 className="make"> {props.make}</h2>
      <p className="carDetails"> {props.numberDoors} doors {props.gearbox} {props.fuelType} {props.model}</p>
      <p className="newStock">BRAND NEW - IN STOCK</p>
    </div>
  )
}


const FullCard = (props) => {
    return (
      <div className="fullcard">
        <MidSection carImage = {props.carImage} originalPrice = {props.originalPrice} currentPrice = {props.currentPrice} save = {props.save}/>
        <BottomSection make = {props.make} numberDoors = {props.numberDoors} gearbox = {props.gearbox} fuelType = {props.fuelType} model = {props.model}/>
      </div>
  )
}

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Header />
        <br />
        <FullCard carImage = {fiat} originalPrice = "14,745" currentPrice = "11,790" save = "2,955" make = "Fiat 500 1.0 MHEV Lounge (s/s) 3dr" numberDoors = {3} gearbox = "Manual" fuelType = "Petrol" model = "Hatchback"/>
        <FullCard carImage = {kia} originalPrice = "18,850" currentPrice = "17,342" save = "1,508" make = "KIA Ceed 1.0 T-GDI ECO 2 (s/s) 5dr" numberDoors = {5} gearbox = "Manual" fuelType = "Petrol" model = "Hatchback"/>
        <FullCard carImage = {audi} originalPrice = "88,055" currentPrice = "76,588" save = "11,467" make = "Audi Q8 3.0 TDI V6 50 Vorsprung Tiptronic quattro (s/s) 5dr" numberDoors = {5} gearbox = "Automatic" fuelType = "Diesel" model = "SUV"/>
        <FullCard carImage = {suzuki} originalPrice = "17,214" currentPrice = "17,214" save = "2,000" make = "Suzuki Ignis 1.2 Dualjet SHVS SZ5 ALLGRIP (s/s) 5dr" numberDoors = {5} gearbox = "Manual" fuelType = "Hybrid-Petrol/Electric" model = "Hatchback"/>
      </div>
      )
  }
}

export default App;
