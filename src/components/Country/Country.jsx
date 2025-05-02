import { useState } from "react";
import "./Country.css"
import CountryDetails from "../CountryDetails/CountryDetails";

const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
  
    
    const {name,flags,area,population,cca3,language}=country;
    const [Visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(!Visited);
    }
    // const passWithParams=()=>{
    //     handleVisitedCountry(Country);
    // }

    
    return (
        <div className="country">
       
            <h3>Name:{name.common}</h3>
        
            <img src={flags.png} alt="" />
            <h3>Area:{area}</h3>
            <h3>Languages:{language}</h3>
            <h3>Population:{population}</h3>
            <h3>Code:{cca3}</h3>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
            <br />
            <button className="Visited-container" onClick={handleVisited}>{Visited ? "Visited":"Going"}</button>
            {Visited ? "I have Visited this Country":"I want visited"}
            <hr />
            <CountryDetails
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            ></CountryDetails>
        </div>
    );
};

export default Country;