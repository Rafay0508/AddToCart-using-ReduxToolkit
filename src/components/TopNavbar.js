import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import cartSlice from "../store/cartSlice";

const TopNavbar = () => {
  const cartProducts = useSelector((state) => state.cart);
  const cartPrice = cartProducts.reduce(
    (total, product) => total + Math.round(product.price) * product.quantity,
    0
  );
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/product">
            Karachi Mart
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Nav.Link as={Link} to="/product">
              Products
            </Nav.Link>
            <Navbar.Text style={{ marginLeft: "20vw" }}>
              <b>
                Total Cart Amount:{" "}
                <i style={{ color: "green" }}>PKR. {cartPrice}</i>
              </b>
            </Navbar.Text>
            <Nav.Link as={Link} to="/cart" style={{ marginLeft: "20vw" }}>
              <b>{cartProducts.length}</b>
              <BsCart4 style={{ fontSize: "28px" }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
