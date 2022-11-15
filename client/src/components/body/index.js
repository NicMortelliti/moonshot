import React from "react";

//  Components
import Search from "../search/Search";

export function Body({ user, displayedPage, setDisplayedPage }) {
  const RenderPage = () => {
    switch (displayedPage) {
      case "main":
        return <p>Main page placeholder</p>;
      case "search":
        return <Search user={user} />;
      case "checkin":
        return <p>Check-In page placeholder</p>;
      case "reservations":
        return <p>Reservations page placeholder</p>;
      case "status":
        return <p>Status page placeholder</p>;
      default:
        return <p>Main page placeholder</p>;
        break;
    }
  };

  return (
    <div>
      <RenderPage />
    </div>
  );
}
