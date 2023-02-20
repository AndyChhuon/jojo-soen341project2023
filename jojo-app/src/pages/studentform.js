//Sudent form component
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
// import profile from "./../../Images/pfp.png";

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
      <Container>
        <h2>Student Form</h2>
        <form onSubmit={submitHandler}>
        <div class="container">
          
  <div class="row">
    <div class="col-sm">
      {/* First of three columns */}
      {/* <img src="" alt="pfp" class="img-rounded"></img> */}
      
<div class="square rounded p-5 bg-secondary">
  <small>profile image</small>
</div>

    </div>
    <div class="col-sm">
      {/* Second of three columns */}

      <label htmlFor="firstName">First Name: </label>
              
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  required
                  value={student.firstName}
                  onChange={handleFirstNameInputChange}
                />

                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  required
                  value={student.email}
                  onChange={handleEmailInputChange}/>

<label htmlFor="city">City: </label>
              
              <input
                type="text"
                id="city"
                name="city"
                class="form-control"
                required
                value={student.city}
                onChange={handleCityInputChange}
              />
                
                <label htmlFor="school">School</label>
              
              <input
                type="text"
                id="school"
                name="school"
                class="form-control"
                required
                value={student.school}
                onChange={handleSchoolInputChange}
              />
    </div>
    <div class="col-sm">
      {/* Third of three columns */}

        <label htmlFor="lastName">Last Name: </label>
              
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  required
                  value={student.lastName}
                  onChange={handleLastNameInputChange}
                />

<label htmlFor="phone">Phone Number: </label>
             
             <input
               type="tel"
               id="phone"
               name="phone"
               class="form-control"
               required
               value={student.phone}
               onChange={handlePhoneInputChange}
             />

<label htmlFor="state">State/Province: </label>
             
             <input
               type="text"
               id="state"
               name="state"
               class="form-control"
               required
               value={student.state}
               onChange={handleStateInputChange}
             />
 <label htmlFor="school">Other input</label>
              
              <input
                type="text"
                id="school"
                name="school"
                class="form-control"
                required
                // value={student.school}
                // onChange={handleSchoolInputChange}
              />
    </div>
  </div>
  <div class="form-group">
            <label htmlFor="workexp">Work Experience: </label>
            <textarea
              type="text"
              id="workexp"
              name="workexp"
              class="form-control"
              rows="5"
              required
              value={student.workexp}
              onChange={handleWorkexpInputChange}
            />
          </div>
          <div class="mt-2 col-md-12">
            <div class="text-center">
            <div class="d-grid gap-2 d-md-block">
              <button type="submit" class="btn btn-success  ">
                Create Profile
              </button>
              </div>
            </div>
          </div>
</div></form>
        
      </Container>
    </section>
  );
}
