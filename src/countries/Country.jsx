import { useState } from "react";

const Countrty = ({country, handleVisitedFLag}) => {
    const [visited, setvisited] = useState(false)

    const {name, flags} = country
    
    const handleVisit = (country) => {       
        if(visited == false){
            setvisited(true)
            handleVisitedFLag(country?.flags?.png)
        }
    }
    
    return (
        <div className="border-4 border-red-400 mb-4 rounded-lg p-5">
            <h2 className="font-semibold text-xl mb-2">{name?.common} :</h2>
            <img src={flags?.png} alt="" />
            <button className="border-4 rounded-md px-3 py-1 font-semibold" onClick={()=>handleVisit(country)}>{visited? "Visited": "Visit"}</button>
        </div>
    );
};
 
export default Countrty;