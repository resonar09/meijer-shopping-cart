import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardImg,
  CardFooter,
  Button,
} from "reactstrap";
import DataContext from "../../data/DataContext";

const Item = (props) => {
  const { isLoggedIn } = useContext(DataContext);

  return (
    <Card>
      <CardHeader>
        <strong>{props.item.name}</strong>
      </CardHeader>
      <CardBody>
        <CardImg
          top
          width="100%"
          src={props.item.image}
          alt={props.item.name}
        />

        {!isLoggedIn && <p>You must login to add to your cart.</p>}
      </CardBody>
      <CardFooter>
        <CardText>
          <strong>{props.item.price}</strong>
          <Button
            color="primary"
            className="float-right"
            disabled={!isLoggedIn}
            onClick={props.updateCartClick}
          >
            Add to Cart
          </Button>
        </CardText>
      </CardFooter>
    </Card>
  );
};

Item.propTypes = {
  product: PropTypes.object,
};

export default Item;
