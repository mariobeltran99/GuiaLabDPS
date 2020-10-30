import React, { useState, useEffect } from "react";
import db from "../firebase";
import { Card, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const EmployeeForm = (props) => {
  const initialStateValues = {
    nombre: "",
    apellido: "",
    cargo: "",
  };
  const [values, setValues] = useState(initialStateValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditEmployee(values);
    setValues({ ...initialStateValues });
  };
  const getEmployeeId = async (id) => {
    const doc = await db.collection("Employee").doc(id).get();
    setValues({ ...doc.data() });
  };
  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      if (props.currentId !== null && props.currentId !== undefined) {
        getEmployeeId(props.currentId);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);
  return (
    <Card>
      <Card.Body>
        <h1 className="title">Formulario de Empleados</h1>
        <br />
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Nombre"
                name="nombre"
                autoComplete="off"
                onChange={handleInputChange}
                value={values.nombre}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Apellido"
                name="apellido"
                autoComplete="off"
                onChange={handleInputChange}
                value={values.apellido}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Cargo"
                name="cargo"
                autoComplete="off"
                onChange={handleInputChange}
                value={values.cargo}
              />
            </Col>
          </Form.Row>
          <br />
          <Button
            variant="outline-primary"
            block
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            {props.currentId === "" ? "Guardar" : "Actualizar"}
          </Button>{" "}
        </Form>
      </Card.Body>
    </Card>
  );
};
export default EmployeeForm;
