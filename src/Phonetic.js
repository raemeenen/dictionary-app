import React from "react";

export default function Phonetic (props) {  
  console.log(props.phonetic)
    return (
    <div className="Phonetic">
      <a href={props.phonetic[0].audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic[0].text}
    </div>
  )
}