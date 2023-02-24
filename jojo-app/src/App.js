import Navbar from "./Components/Navbar/JojoNavbar";
//import route and routes
import { Route, Routes } from "react-router-dom";
//import studentform
import StudentForm from "./pages/studentform";
import JobPosts from "./pages/JobPosts";
import ApiPost from "./pages/apipost";
import ApiDelete from "./pages/apidelete";
import ApiPut from "./pages/apiput";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/jobs" element={<JobPosts />} />
        <Route path="/apipost" element={<ApiPost />} />
        <Route path="/apidelete" element={<ApiDelete />} />
        <Route path="/apiput" element={<ApiPut />} />
      </Routes>
    </>
  );
}

export default App;
