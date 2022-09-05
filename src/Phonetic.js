import React from "react";

export default function Phonetic (props) {  
  if (props.phonetic[0].audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic[0].audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        {props.phonetic[0].text}
      </div>
    )
  } else {
    return (
      <div className="Phonetic">
        {props.phonetic[0].text}
      </div>  
    )
  }
}