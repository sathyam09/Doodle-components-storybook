import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import React, { useState } from "react";
import PropTypes from "prop-types";

const Locations = () => {
    
  const { region, SetRegion } = useState('');
  const[country, setCountry] = useState('');

  const selectCountry = (val) => {
    setCountry(val );
  }

  const selectRegion = (val) =>{
   SetRegion(val);
  }

  return(
    <div>
    <CountryDropdown
             value={country}
             onChange={(val) => selectCountry(val)} />
           {/* <RegionDropdown
             country={country}
             value={region}
             onChange={(val) => selectRegion(val)} /> */}
            </div>
);
}

Locations.propTypes = {
    
  };

export default Locations;