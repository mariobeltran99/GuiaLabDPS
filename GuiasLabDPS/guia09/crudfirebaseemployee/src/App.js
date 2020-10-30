import React from "react";
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Employee from "./components/employee";
function App() {

  return (
      <>
          <Navbar bg="dark" expand="lg" variant="dark">
              <Navbar.Brand>Administrar Empleados</Navbar.Brand>
          </Navbar>
          <Employee />
      </>
  );
}

export default App;
