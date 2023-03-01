import Navbar from "./Components/Navbar/JojoNavbar";
//import route and routes
import { Route, Routes } from "react-router-dom";
//import studentform
import StudentForm from "./pages/StudentForm/studentform";
import JobPosts from "./pages/JobPosts/JobPosts";
import ManagePosts from "./pages/ManagePosts/ManagePosts";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<JobPosts />} />

        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/JobsManager" element={<ManagePosts />} />
      </Routes>
    </>
  );
}

export default App;
