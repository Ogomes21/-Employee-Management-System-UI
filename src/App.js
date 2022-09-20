import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";

//function that returns the entire HTML
//allows you to write the HTML components within JavaScript
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<EmployeeList />} />
      <Route path="/" element={<EmployeeList />}></Route>
      <Route path="/employeeList" element={<EmployeeList />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
