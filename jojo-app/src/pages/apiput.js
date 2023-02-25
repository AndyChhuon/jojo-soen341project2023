//Sudent form component
import React, { useState } from "react";

export default function ApiPut() {
  const [Id, setId] = useState("");
  const handleIdInputChange = (event) => {
    setId(event.target.value);
  };
  const [Api, setApi] = useState({
    jobTitle: "",
    jobDescription: "",
    jobCategory: "",
    jobLocation: "",
    jobCompany: "",
    jobDate: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handlejobTitleInputChange = (event) => {
    setApi({ ...Api, jobTitle: event.target.value });
  };
  const handlejobDescriptionInputChange = (event) => {
    setApi({ ...Api, jobDescription: event.target.value });
  };
  const handlejobCategoryInputChange = (event) => {
    setApi({ ...Api, jobCategory: event.target.value });
  };
  const handlejobLocationInputChange = (event) => {
    setApi({ ...Api, jobLocation: event.target.value });
  };
  const handlejobCompanyInputChange = (event) => {
    setApi({ ...Api, jobCompany: event.target.value });
  };
  const handlejobDateInputChange = (event) => {
    setApi({ ...Api, jobDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(Api);
    fetch(
      "https://jobapplicationsapi.azurewebsites.net/api/JobPostsAPI/" + Id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Api),
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
      <h2>Api PUT</h2>
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
        <div>
          <label htmlFor="jobTitle">Job Title: </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            required
            value={Api.jobTitle}
            onChange={handlejobTitleInputChange}
          />
        </div>
        <div>
          <label htmlFor="jobDescription">Job Description: </label>
          <input
            type="text"
            id="jobDescription"
            name="jobDescription"
            required
            value={Api.jobDescription}
            onChange={handlejobDescriptionInputChange}
          />
        </div>
        <div>
          <label htmlFor="jobCategory">Job Category: </label>
          <input
            type="text"
            id="jobCategory"
            name="jobCategory"
            required
            value={Api.jobCategory}
            onChange={handlejobCategoryInputChange}
          />
        </div>
        <div>
          <label htmlFor="jobLocation">Job Location: </label>
          <input
            type="text"
            id="jobLocation"
            name="jobLocation"
            required
            value={Api.jobLocation}
            onChange={handlejobLocationInputChange}
          />
        </div>
        <div>
          <label htmlFor="jobCompany">Job Company: </label>
          <input
            type="text"
            id="jobCompany"
            name="jobCompany"
            required
            value={Api.jobCompany}
            onChange={handlejobCompanyInputChange}
          />
        </div>
        <div>
          <label htmlFor="jobDate">Date End of post: </label>
          <input
            type="text"
            id="jobDate"
            name="jobDate"
            required
            value={Api.jobDate}
            onChange={handlejobDateInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
