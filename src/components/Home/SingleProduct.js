import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartAction, RemoveFromCart } from "../../actions/cartActions";
import classes from "./home.module.css";

export function numberWithComas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cartList);
  const { cart } = cartList;

  const handleAddToCart=()=>{
    dispatch(AddToCartAction(product))

  }

  const handleRemoveFromCart=(product)=>{
         dispatch(RemoveFromCart(product))
  }

  return (
    <div className={classes.products}>
      <Container>
        <Card>
          <Card.Img
            style={{
              width: "100%",
              height: 'auto',
              obejectFit:'cover',
              alignItems: "center",
            }}
            variant="top"
            src={product.image}
            alt={product.title}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle>
              <div>
                <span>{product.description}</span> <br />
                <span>Ksh. {numberWithComas(product.price)}</span>
              </div>
            </Card.Subtitle>
            <div
              style={{
                padding: 10,
              }}
            >
              {cart.some((p) => p._id === product._id) ? (
                <Button
                  style={{
                    fontWeight: "bolder",
                  }}
                  variant="danger"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  {" "}
                  DROP ITEM
                  <FaShoppingCart
                    style={{
                      color: "#fff",
                    }}
                  />
                </Button>
              ) : (
                <Button
                  style={{
                    fontWeight: "bolder",
                  }}
                  variant="warning"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  {!product.inStock ? "Out of Stock" : "ADD TO CART"}{" "}
                  <FaShoppingCart
                    style={{
                      color: "#fff",
                    }}
                  />
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SingleProduct;
