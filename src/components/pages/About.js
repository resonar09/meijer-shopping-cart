import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export default function About() {
  //const { userData } = useContext(UserContext);

  return (
    <Container>
      <p>This simple shopping cart application was created by Darren Perez as a POC demo for the Meijer Company.</p>
      <p>Please visit my github repository for source code. </p> <Link to="https://github.com/resonar09/">https://github.com/resonar09/</Link>
    </Container>
  );
}
