import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import NumberFormat from 'react-number-format';
import DataContext from "../../data/DataContext";

const Cart = (props) => {
  const { cart, updateCart, grandTotal } = useContext(DataContext);

  return (
    <div>
      <h1>My Cart</h1>
      {cart && cart.length > 0 ? (
        <Table striped responsive>
          <thead>
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.code}>
                <th scope="row">
                  <img
                    src={item.image}
                    alt={item.name}
                    width="60"
                    height="60"
                  ></img>
                </th>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td> <Button color="primary" onClick={() => updateCart(item, 0)}>X</Button></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Grand Total</td>
              <td><NumberFormat value={grandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale="2" /></td>
            </tr>
          </tfoot>
        </Table>
      ) : (
        <Link to="/">Continue shopping</Link>
      )}
    </div>
  );
};

export default Cart;
