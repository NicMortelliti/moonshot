import React from "react";

// Store
import { useSelector, useDispatch } from "react-redux";

const Status = () => {
  // Bring in user store
  const user = useSelector((state) => state.user);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "solid", flex: 1, margin: ".5em" }}>
        <label htmlFor="" style={{ backgroundColor: "black", color: "white" }}>
          API Comms
        </label>
        <p style={user.isFetching ? { backgroundColor: "lightblue" } : {}}>
          isFetching: {user.isFetching ? "true" : "false"}
        </p>
        <p style={user.isSuccess ? { backgroundColor: "lightgreen" } : {}}>
          isSuccess: {user.isSuccess ? "true" : "false"}
        </p>
        <p style={user.isError ? { backgroundColor: "lightcoral" } : {}}>
          isError: {user.isError ? "true" : "false"}
        </p>
      </div>
      {user.errorMessages ? (
        <div
          style={{
            border: "solid",
            borderColor: "red",
            flex: 1,
            margin: ".5em",
          }}>
          <label htmlFor="" style={{ backgroundColor: "red", color: "white" }}>
            Errors from API
          </label>
          {user.errorMessages.map((each) => (
            <p
              key={each}
              style={{ backgroundColor: "lightcoral", color: "white" }}>
              {each}
            </p>
          ))}
        </div>
      ) : null}

      {user.data ? (
        <div>
          <p>
            {user.data.id} {user.data.first_name} {user.data.last_name}{" "}
            {user.data.email} {user.data.admin}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Status;
