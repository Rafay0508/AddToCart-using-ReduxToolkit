import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import TopNavbar from "./TopNavbar";
import { getProducts } from "../store/productSlice";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("All");

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
    if (status == "Loading") {
      setError(false);
      setLoading(true);
    } else if (status == "idle") {
      setError(false);
      setLoading(false);
    } else if (status == "Rejected") {
      setError(true);
    }
  }, []);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
    alert("Product add to cart Successfully");
  };

  return (
    <div>
      <h1>Product DashBoard</h1>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && (
        <Alert key={"danger"} variant={"danger"}>
          Oops! Something Went Wrong
        </Alert>
      )}
      <div style={{ margin: "40px" }}>
        <label for="category">Choose Category: </label>
        <select
          name="category"
          id="category"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {products
          .filter((product) => {
            if (filter === "All") {
              return true;
            } else {
              return product.category === filter;
            }
          })
          .map((product) => (
            <div
              key={product.id}
              style={{
                float: "left",
                height: "300px",
                boxSizing: "border-box",
                padding: "0 13px",
              }}
            >
              {" "}
              <Card style={{ minWidth: "40%", whiteSpace: "nowrap" }}>
                <div
                  style={{
                    display: "flex",
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
                </div>
                <Card.Body>
                  <Card.Title
                    style={{
                      wordWrap: "break-word",
                      maxWidth: "200px",
                      overflow: "hidden",
                      textOverflow: "clip",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  <Card.Text>
                    PKR. <i>{Math.round(product.price)}</i>
                  </Card.Text>
                  <Card.Footer>
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
