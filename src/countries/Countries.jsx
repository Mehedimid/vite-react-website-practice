import { useEffect, useState } from "react";
import Countrty from "./Countrty";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedFLag = (flag) => {
    const newVistedFLags= [...visitedFlag, flag] ;
    setVisitedFlag(newVistedFLags)
  };

  if (!countries.length) {
    return <p>Loading...</p>;
  }

  return (
   <>

   <div className="flex gap-2">
     <h2>Visited Countries flag: </h2>
     {visitedFlag?.map(flag=><img src={flag} key={flag} style={{width:'50px'}} />)}
     

   </div>
    <div>
      <p>Countries : {countries?.length}</p>
      {countries?.map((country, idx) => (
        <Countrty
          key={country?.name?.common}
          country={country}
          handleVisitedFLag={handleVisitedFLag}
        />
      ))}
    </div>
   </>
  );
};

export default Countries;
