import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";

//function that returns the entire HTML
//allows you to write the HTML components within JavaScript
function App() {
  return (
    <>
      <Navbar />
      <AddEmployee />
    </>
  );
}

export default App;
