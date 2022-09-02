import React from "react";
import "./Phonetic.css";

export default function Meaning (props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map (function (definition, index)
        {if (definition.example) {
          return (
            <div key={index}>
              <div>
                <strong>Definition: </strong>{definition.definition}
                <br />
                <strong>Example: </strong><em>{definition.example}</em>
                <br />
                <br />
              </div>
            </div>
          )
        } else {
          return (
            <div key={index}>
              <div>
                <strong>Definition: </strong>{definition.definition}
              </div>
            </div>
          )

        }
      })}
    </div>
  )
}