import Navbar from "./Components/Navbar/Navbar";
//import route and routes
import { Route, Routes } from "react-router-dom";
//import studentform
import StudentForm from "./pages/studentform";
import Home from "./pages/home";

function App() {
  return (
    <>
      
      <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentForm" element={<StudentForm />} />
      </Routes>
      </Navbar>
      {/*  */}
      <StudentForm></StudentForm>
    </>
  );
}

export default App;
