import { useState } from "react";

import './App.css';
import Data from './Project1(ToursOfCities)/Data';
import Tours from "./Project1(ToursOfCities)/Tours";


// Tour App
function App(){
        
  const[tours, setTours] = useState(Data)




  function removeTour(id){
         const newTours = tours.filter(tour =>tour.id !==id );
         setTours(newTours);
  }

  if(tours.length ===0 ){
    return(
      <div className="No-tours">
        <h2>No Tours Left</h2>
        <button className="refresh" onClick={()=>{setTours(Data)}}> Refresh</button>
      </div>
    )
  }

  return (
    <div>
  
    <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  )
}


export default App;
