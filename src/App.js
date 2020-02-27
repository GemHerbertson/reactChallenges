import React from 'react';
import './App.css';
import Header from './components/Header.js';
import FullCard from './components/FullCard.js';
import fiat from './img/mcqueen.jpg';
import kia from './img/mater.jpg';
import audi from './img/blue.jpeg';
import suzuki from './img/sally.jpeg';

class App extends React.Component {

  state = {
    car: [
      {carImage: fiat, originalPrice: "14,745", currentPrice: "11,790", save: "2,955", make: "Fiat 500 1.0 MHEV Lounge (s/s) 3dr", numberDoors: 3, gearbox: "Manual", fuelType: "Petrol", model: "Hatchback"},
      {carImage: kia, originalPrice: "18,850", currentPrice: "17,342", save: "1,508", make: "KIA Ceed 1.0 T-GDI ECO 2 (s/s) 5dr", numberDoors: 5, gearbox: "Manual", fuelType: "Petrol", model: "Hatchback"},
      {carImage: audi, originalPrice: "88,055", currentPrice: "76,588", save: "11,467", make: "Audi Q8 3.0 TDI V6 50 Vorsprung Tiptronic quattro (s/s) 5dr", numberDoors: 5, gearbox: "Automatic", fuelType: "Diesel", model: "SUV"},
      {carImage: suzuki, originalPrice: "17,214", currentPrice: "17,214", save: "2,000", make: "Suzuki Ignis 1.2 Dualjet SHVS SZ5 ALLGRIP (s/s) 5dr", numberDoors: 5, gearbox: "Manual", fuelType: "Hybrid-Petrol/Electric", model: "Hatchback"}
    ]
  }

  render(){

    const eachCar = this.state.car.map((car, index) => {
      return <FullCard carImage = {car.carImage} originalPrice = {car.originalPrice} currentPrice = {car.currentPrice} save = {car.save} make = {car.make} numberDoors = {car.numberDoors} gearbox = {car.gearbox} fuelType = {car.fuelType} model = {car.model} key = {index}/>
    })

    return (
      <div className="App">
        <Header />
        <br />
        {eachCar}
      </div>
      );
  }
}

export default App;
