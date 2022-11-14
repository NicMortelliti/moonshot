import React from "react";

//  Components
import Search from "../search/Search";

export function Body({ user }) {
  return (
    <div>
      <Search user={user} />
    </div>
  );
}
