import React, { useState, useEffect } from "react";
import db from "../firebase";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import EmployeeForm from "./employeeForm";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Employee = () => {
  const [Employee, setEmployee] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const addOrEditEmployee = async (EmployeeObject) => {
    try {
      if (currentId === "") {
        await db.collection("Employee").doc().set(EmployeeObject);
      } else {
        await db.collection("Employee").doc(currentId).update(EmployeeObject);
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getEmployee = async () => {
    db.collection("Employee").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setEmployee(docs);
    });
  };
  useEffect(() => {
    getEmployee();
  }, []);
  const onDeleteEmployee = async (id) => {
    if (window.confirm("¿Desea eliminar este empleado?")) {
      await db.collection("Employee").doc(id).delete();
    }
  };
  return (
    <Container className="space">
      <Row className="justify-content-center">
        <Col sm={12} xl={6} md={6} lg={6} xs={12}>
          <EmployeeForm {...{ addOrEditEmployee, currentId, Employee }} />
        </Col>
      </Row>
      <br />
      <br />
      <Row className="justify-content-center">
        <Col sm={12} xl={12} md={12} lg={12} xs={12}>
          <h1 className="title">Lista de Empleados</h1>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cargo</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {Employee.map((Employ) => (
                <tr key={Employ.id}>
                  <td>{Employ.id}</td>
                  <td>{Employ.nombre}</td>
                  <td>{Employ.apellido}</td>
                  <td>{Employ.cargo}</td>
                  <td>
                    <Button
                      variant="outline-warning"
                      block
                      onClick={() => setCurrentId(Employ.id)}
                    >
                      Editar
                    </Button>{" "}
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      block
                      onClick={() => onDeleteEmployee(Employ.id)}
                    >
                      Eliminar
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Employee;
