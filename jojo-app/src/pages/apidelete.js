//Sudent form component
import React, { useState } from "react";

export default function ApiDelete() {
  const [Id, setId] = useState("");
  const handleIdInputChange = (event) => {
    setId(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(Id);
    fetch(
      "https://jobapplicationsapi.azurewebsites.net/api/JobPostsAPI/" + Id,
      {
        method: "DELETE",
      }
    ).then((response) =>
      alert(
        "Response Status:" +
          response.status +
          ". Responded with " +
          response.statusText
      )
    );

    return false;
  };
  //input fields for Api form
  return (
    <section>
      <h2>Api DELETE</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="Id">Job ID: </label>
          <input
            type="text"
            id="Id"
            name="Id"
            required
            value={Id}
            onChange={handleIdInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
