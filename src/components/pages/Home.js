import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import ItemList from "../sections/ItemList";

import DataContext from "../../data/DataContext";

export default function Home() {
  //const { userData } = useContext(UserContext);
  const history = useHistory();

  const { items, getItems } = useContext(DataContext);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <Container>
      <ItemList items={items}></ItemList>
    </Container>
  );
}
