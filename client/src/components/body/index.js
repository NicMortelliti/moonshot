import React, { useState } from "react";

//  Components
import Search from "./Search";

export function Body(props) {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Search setResults={setResults} />
      ))}
    </div>
  );
}
