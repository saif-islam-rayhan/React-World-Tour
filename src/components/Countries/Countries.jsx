import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"


const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountry]=useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);


    useEffect(()=>{
     fetch("https://restcountries.com/v3.1/all")
     .then(res=>res.json())
     .then(data=>setCountries(data))
    },[])
    const handleVisitedCountry =country=>{
      
        
        console.log("Add visited to country ")
       const newVisitedCountries=[...visitedCountries,country];
       setVisitedCountry(newVisitedCountries);
    }
    console.log(visitedCountries);
    const handleVisitedFlags=flag=>{
        console.log("Flag adding");
        const newVisitedFlags=[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }
    
    return (
        <div>
           <h3>Countries:{countries.length}</h3> 
           <div>
           <h5>Visitited Countries{visitedCountries.length}</h5>
           <ul>
              {
             
                visitedCountries.map(c=> <li>{c.name.common}</li>)
              }
           </ul>
           </div>
           <div className="flag-container">
              {
                visitedFlags.map(flag => <img src={flag} alt="" />
                )
              }
           </div>
          
           <div className="country-container">
           {
            countries.map(country=><Country handleVisitedCountry={handleVisitedCountry} 
                handleVisitedFlags={handleVisitedFlags}
                country={country}></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;