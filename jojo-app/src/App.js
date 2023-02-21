import Navbar from "./Components/Navbar/JojoNavbar";
//import route and routes
import { Route, Routes } from "react-router-dom";
//import studentform
import StudentForm from "./pages/studentform";
import JobPosts from "./pages/JobPosts";

import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<div></div>} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/jobs" element={<JobPosts />} />
      </Routes>
    </>
  );
}

export default App;
