import React,{useState}  from 'react'
import { GoogleMap, withGoogleMap, withScriptjs,Marker,InfoWindow } from "react-google-maps"
  

const [newstate, setstate] = useState(null)

 function Map() {
  return (
    <GoogleMap   defaultZoom={15} 
                defaultCenter ={{ lat:39.764060, lng:-86.289130}} >
  
    {(<Marker position ={{lat:39.764060, lng:-86.289130}}
    
    onClick ={() => {
      setstate(<div> I am around</div>)
    }
    }
    
    /> 

    )}
    {<InfoWindow><div>{state}</div></InfoWindow>}

</GoogleMap>  
  );
}
 const WrappedMap =withScriptjs(withGoogleMap(Map))


export default function Mapping() {
  return(
     <div style = {{ height:'100vh', width : '100vw'}}>
       <WrappedMap  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key 
      =${process.env.REACT_APP_GOOGLE_KEY}`} 
                    loadingElement={<div style={{ height: `100%` }} />} 
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}

       
       
       />
     </div>
    
  );
}


