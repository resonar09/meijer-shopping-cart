import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Container } from "reactstrap";
import DataContext from "../../data/DataContext";
const Register = (props) => {
  const { signIn } = useContext(DataContext);
  return (
    <Container className="mt-4">
      <Form >
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@domain.com"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="passwordCheck" className="mr-sm-2">
            Password Check
          </Label>
          <Input
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            
          />
        </FormGroup>
        <Link to="/" onClick={signIn} className="btn btn-primary mt-4">Submit</Link>
      </Form>
    </Container>
  );
};

export default Register;
