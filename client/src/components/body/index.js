import React, { useState } from "react";

//  Components
import Search from "./Search";

export function Body(props) {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Search setResults={setResults} />
      {results.map((each) => (
        <p key={each.id}>{`${each.origin.name} -> ${each.destination.name}`}</p>
      ))}
    </div>
  );
}
