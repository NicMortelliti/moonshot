import React, { useState } from "react";

//  Components
import Search from "./Search";

export function Body(props) {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Search results={results} setResults={setResults} />
    </div>
  );
}
