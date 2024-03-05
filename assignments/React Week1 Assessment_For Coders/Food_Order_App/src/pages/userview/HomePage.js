import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid" style={{ marginBottom: '4rem' }}>
        {/* Implement Task 1 - Displaying cuisine names and images */}
        <h4 style={{ margin: '30px 0' }}> Try New Cuisines</h4>
         <Row>
         {cuisines.map(cuisine=> (
              <Card style={{ width: '12rem' }} className="m-2">
              <Card.Img variant="top" src={cuisine.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{cuisine.name}</Card.Title>
              </Card.Body>
            </Card>
         ))}
         </Row>
      </div>

      <div className="container-fluid">
        {/* Implement Task 1 - Displaying category names and images */}
        <h4 style={{ margin: '30px 0' }}>Get inspiration for your order</h4>
        <Row>
            {categories.map(category=> (
                <Card style={{ width: '12rem' }} className="m-2">
                <Card.Img variant="top" src={category.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                </Card.Body>
                </Card>
            ))}
        </Row>
      </div>

      <div className="container-fluid">
        {/* Implement Task 1 - Displaying restaurant names and images */}
        <h4 style={{ margin: '30px 0' }}>Top Restaurants</h4>
        <Row>
            {restaurants.map(restaurant=> (
                <Card style={{ width: '12rem' }} className="m-2">
                <Card.Img variant="top" src={restaurant.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                </Card.Body>
                </Card>
            ))}
        </Row>
      </div>
    </>
  );
};

export default HomePage;
