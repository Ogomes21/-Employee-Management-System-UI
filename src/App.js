import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";

//function that returns the entire HTML
//allows you to write the HTML components within JavaScript
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <AddEmployee />
    <EmployeeList />
    </BrowserRouter>
    </>
  );
}

export default App;
