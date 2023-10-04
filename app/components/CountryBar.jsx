import React from "react";

export default function CountryBar({countries}){
  return (
      <div className="top-bar">
        <small>Stores available in:</small>
        {
        countries.map((country, index) => (
            <span key={index}>
              <img src={`https://flagcdn.com/w40/${country.isoCode.toLowerCase()}.png`} alt="flag"/>
            </span>
          ))
        }
      </div>
  )
}
