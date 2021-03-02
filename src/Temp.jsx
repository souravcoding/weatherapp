import React, { useState,useEffect } from "react"

function Temp() {
    const [city,updatecity]=useState(null)
    const [search,updatesearch]=useState('mumbai')
    useEffect(()=>{
      async function weather(){
          const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=562d117a8a234a09092c49e7c57b38a4`)
          const jso =await res.json() 
        //   console.log(jso);
          updatecity(jso.main) 
          
       
        } 

      weather()
    },[search])

    const update=(e)=>{
            updatesearch(e.target.value)

    }

    
  return (<> <div className="background">
             <h1 style={{textShadow: "4px 2px 2px black"}}>Live Search Weather App</h1>
            <div className="mainbox">
             <input type="text" placeholder="Enter city" onChange={update} value={search} />
             <h1><i class="fas fa-street-view"></i>{search}</h1>
             
           {!city ? (<p className="nodata"><b>No data found</b></p>): (<><p className="para">Current temp:-<b> {city.temp} °C</b>  </p>
                                             <p className="para2"> Max temp:-<b>{city.temp_max} °C</b>   ||| Min temp:-<span><b>{city.temp_min} °C</b>  </span></p></>)}
            </div>
            </div>
        </>
  );
}

export default Temp;
