import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { add, remove } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  console.log(cartProducts);

  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h1>Cart DashBoard</h1>
      <div>
        {cartProducts.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                width: "40rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  width: "100px",
                  height: "130px",
                }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  PKR. {product.price} * {product.quantity}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove from Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br />
      <Link to={"/product"}>
        {" "}
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default Cart;
