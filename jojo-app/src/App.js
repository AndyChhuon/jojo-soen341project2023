import Navbar from "./Components/Navbar/JojoNavbar";
//import route and routes
import { Route, Routes } from "react-router-dom";
//import studentform
import StudentForm from "./pages/studentform";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/studentForm" element={<StudentForm />} />
      </Routes>
    </>
  );
}

export default App;
