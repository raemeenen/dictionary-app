import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Synonyms from "./Synonyms";

export default function Results (props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <Phonetic phonetic={props.results.phonetics} />
        </section>
        <section>
          {props.results.meanings.map(function(meaning, index) {
            return <div key={index}>
              <Meaning meaning={meaning} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          })}
        </section>
      </div>
    )
  } else {
    return null;
  }
}