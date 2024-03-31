import React, { useState } from "react";
import products from "../products";
import { Row, Col, Image, Button, ListGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import { LinkContainer } from "react-router-bootstrap";

const ProductPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const productObject = products.find((product) => product.id === parseInt(id));

  const categories = JSON.parse(localStorage.getItem("categories"));
  const categoryName = categories.find(
    (category) => category.id === productObject.category
  ).name;

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const quantityDropdownOptions = [];
  for (let i = 1; i <= 3 && i <= productObject.quantity; i++) {
    quantityDropdownOptions.push(<option key={i} value={i}>{i}</option>);
  }
  
  return (
    <>
  
      <LinkContainer to="/">
        <Button variant="primary" className="mb-4">
          Show All Products
        </Button>
      </LinkContainer>
      <Row>
        <Col md={4}>
          <Image src={productObject.image} width={300} height={300} fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{productObject.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Description : {productObject.description}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Category : {categoryName}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <h4>Price : </h4>
                </Col>
                <Col>
                  <h4>
                    <strong>${productObject.price}</strong>
                  </h4>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h4>Status : </h4>
                </Col>
                <Col>
                  <h4>
                    <strong>
                      {productObject.quantity > 0
                        ? " Available"
                        : " Out Of Stock"}
                    </strong>
                  </h4>
                </Col>
              </Row>
            </ListGroup.Item>
            {loggedInUser && !loggedInUser.isAdmin && productObject.quantity > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Select Quantity : </h4>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={selectedQuantity}
                      onChange={(e) => setSelectedQuantity(e.target.value)}
                    >
                      {quantityDropdownOptions}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            {loggedInUser && !loggedInUser.isAdmin &&
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                disabled={productObject.quantity === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
