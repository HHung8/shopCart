import React from "react";
import { Button, Card } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "@reach/router";

const ProductCard = ({ data }) => {
  const { image, price, name, _id } = data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const addToCart = () => {
    const productWithId = { ...data, id: _id };
    addItem(productWithId);
  };

  return (
    <Card
      style={{ width: "14rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-light text-black"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <Link to={`/product-details/${_id}`}>
        <div
          style={{
            background: "white",
            height: "15rem",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "inherit",
          }}
        >
          <div style={{ width: "9rem" }}>
            <Card.Img variant="top" src={image} className="img-fluid" />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Card.Title>
        <Card.Title>
          <span className="h3">${price}</span>
        </Card.Title>
        <Button onClick={() => addToCart()}>
          <BsCartPlus size="1.8rem" />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
