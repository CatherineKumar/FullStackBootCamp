import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying cuisine names and images */}
         <h4>Try New Cuisines</h4>
         <Row>
         {cuisines.map(cuisine=> (
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={cuisine.image} />
              <Card.Body>
                <Card.Title>{cuisine.name}</Card.Title>
                <Card.Text>
                {cuisine.description}
                </Card.Text>
                
              </Card.Body>
            </Card>
         ))}
         </Row>
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying category names and images */}
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying restaurant names and images */}
      </div>
    </>
  );
};

export default HomePage;
