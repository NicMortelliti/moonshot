import React from "react";

//  Components
import Search from "../search/Search";
import { ReservationBox } from "../reservations";

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
        return <ReservationBox />;
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
