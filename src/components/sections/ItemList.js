import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Item from "./Item";
import DataContext from "../../data/DataContext";

const ItemList = (props) => {
  const { updateCart } = useContext(DataContext);

  const addToCart = (item) => {
    updateCart(item);
  };

  return (
    <Row className="py-4">
      {props.items.map((item) => (
        <Col md className="pb-4" key={item.code}>
          <Item item={item} updateCartClick={() => addToCart(item)}></Item>
        </Col>
      ))}
    </Row>
  );
};

ItemList.propTypes = {
  items: PropTypes.array,
};

export default ItemList;
