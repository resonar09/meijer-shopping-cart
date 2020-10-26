import React, { Component } from "react";
import DataContext from "./DataContext";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import API from "./API";

class DataProvider extends Component {
  state = {
    profile: {},
    isLoggedIn: false,
    items: [],
    cart: [],
    totalItems: 0,
    grandTotal:0
  };

  getItems = () => {
    API.get().then((response) => {
      this.setState({ items: response });
      console.log("got items");
    });
  };

  updateCart = (item, quantity) => {
    if (quantity === undefined) {
      quantity = 1;
    }
    if (quantity === 0) {
      const remainingItems = this.state.cart.filter(
        (x) => x.code !== item.code
      );
      this.setState({ totalItems: this.state.totalItems - (1 * item.quantity)});
      this.setState({ grandTotal: this.state.grandTotal - (parseFloat(item.price.substring(1)) * item.quantity) });
      this.setState({ cart: remainingItems });
      ToastsStore.success("You've removed 1 item - " + item.name);
    } else {
      const cartItems = this.state.cart.slice();
      let findCartItem = cartItems.find((x) => x.code === item.code);
      if (findCartItem) {
        findCartItem.quantity += quantity;
        findCartItem.lineTotal =
          parseFloat(item.price.substring(1)) * quantity;
      } else {
        cartItems.push({
          name: item.name,
          price: item.price,
          image: item.image,
          code: item.code,
          quantity: quantity,
          lineTotal: parseFloat(item.price.substring(1)) * quantity,
        });
      }
      this.setState({ totalItems: this.state.totalItems + 1 });
      this.setState({ grandTotal: this.state.grandTotal + parseFloat(item.price.substring(1)) });
      ToastsStore.success("You've added 1 " + item.name);
      this.setState({ cart: cartItems });
    }
  };

  signOut = () => {
    this.setState({ profile: {}, isLoggedIn: false });
    ToastsStore.success("You are logged out");
  };

  signIn = () => {
    this.setState({
      profile: { firstName: "Demo", lastName: "User" },
      isLoggedIn: true,
    });
    ToastsStore.success("You are logged in");
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          profile: this.state.profile,
          isLoggedIn: this.state.isLoggedIn,
          items: this.state.items,
          cart: this.state.cart,
          totalItems: this.state.totalItems,
          grandTotal: this.state.grandTotal,
          getItems: this.getItems,
          updateProfile: this.updateProfile,
          updateCart: this.updateCart,
          signOut: this.signOut,
          signIn: this.signIn,
        }}
      >
        {this.props.children}
        <ToastsContainer
          style={{ height: "60px" }}
          position={ToastsContainerPosition.BOTTOM_RIGHT}
          store={ToastsStore}
        />
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
