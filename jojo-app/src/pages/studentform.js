//Sudent form component
import React, { useState } from "react";


export default function StudentForm() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    school: "",
    extracurriculars: "",
    workExperience: "",
    awards: "",
    resume: "",
    coverLetter: "",
    linkedIn: "",
    other: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleFirstNameInputChange = (event) => {
    setStudent({ ...student, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setStudent({ ...student, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setStudent({ ...student, email: event.target.value });
  };
  const handlePhoneInputChange = (event) => {
    setStudent({ ...student, phone: event.target.value });
  };
  const handleAddressInputChange = (event) => {
    setStudent({ ...student, address: event.target.value });
  };
  const handleCityInputChange = (event) => {
    setStudent({ ...student, city: event.target.value });
  };
  const handleStateInputChange = (event) => {
    setStudent({ ...student, state: event.target.value });
  };

  const handleSchoolInputChange = (event) => {
    setStudent({ ...student, school: event.target.value });
  };
  const handleWorkexpInputChange = (event) => {
    setStudent({ ...student, workexp: event.target.value });
  };


  const submitHandler = (event) => {
    event.preventDefault();
    return false;
  };
  //input fields for student form
  return (
    <section>
      <h2>Student Form</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={student.firstName}
            onChange={handleFirstNameInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={student.lastName}
            onChange={handleLastNameInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={student.email}
            onChange={handleEmailInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={student.phone}
            onChange={handlePhoneInputChange}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={student.city}
            onChange={handleCityInputChange}
          />
        </div>
        <div>
          <label htmlFor="state">State/Province: </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            value={student.state}
            onChange={handleStateInputChange}
          />
        </div>
        <div>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            required
            value={student.school}
            onChange={handleSchoolInputChange}
          />
        </div>
        <div>
          <label htmlFor="workexp">Work Experience: </label>
          <input
            type="text" 
            id="workexp"
            name="workexp"
            required
            value={student.workexp}
            onChange={handleWorkexpInputChange}
          />
        </div>
        
        <button type="submit">Submit</button>
        
      </form>
    </section>
  );
}
