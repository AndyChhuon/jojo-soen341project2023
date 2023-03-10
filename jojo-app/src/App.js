import Navbar from "./Components/Navbar/JojoNavbar";
//import route and routes
import { Route, Routes } from "react-router-dom";
//import studentform
import StudentForm from "./pages/StudentForm/studentform";
import JobPosts from "./pages/JobPosts/JobPosts";
import ManagePosts from "./pages/ManagePosts/ManagePosts";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<JobPosts />} />

        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/JobsManager" element={<ManagePosts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
