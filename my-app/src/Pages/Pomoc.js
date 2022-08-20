import React, { Component } from "react";
import { Card, CardGroup, Button, Row, Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBTypography } from 'mdb-react-ui-kit';

//Components
import Footer from "../Components/Footer";

export default class Pomoc extends Component{
    render(){
        return(
            <>
            <div class= "page-title">
            <CardGroup>
            <Row xs={3} className="g-4 m-4">
                <Col style={{width: "30rem"}}>
      <Card>
        <Card.Body>
          <Card.Title>Obrona</Card.Title>
          <Card.Text>
          <p class="h6"> Kupione z twoją pomocą: </p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item><br/><br/></ListGroup.Item>
      </ListGroup>
      <Card.Body className="text-center">
        <Button variant="dark" href="#">Zobacz pełny raport</Button>
      </Card.Body>
    </Card>
</Col>

      <Col style={{width: "30rem"}}>
      <Card>
        <Card.Body>
          <Card.Title>Pomóc medyczna</Card.Title>
          <Card.Text>
          <p class="h6">Kupione z twoją pomocą:</p>
            
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
            <ListGroup.Item><br/><br/></ListGroup.Item>
      </ListGroup>
      <Card.Body className="text-center">
        <Button variant="dark" href="#">Zobacz pełny raport</Button>
      </Card.Body>
      </Card>
      </Col>

      <Col style={{width: "30rem"}}>
      <Card>
        <Card.Body>
          <Card.Title>Odbudowa Ukrainy</Card.Title>
          <Card.Text>
          <p class="h6"> Odbudowa infrastruktury wkrótce się rozpocznie </p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Razem zebrane: <cite title='Source Title'>0 zł</cite>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </ListGroup.Item>
      </ListGroup>
      <Card.Body className="text-center">
        <Button variant="dark" href="#">Zobacz pełny raport</Button>
      </Card.Body>
      </Card>
      </Col>
      </Row>
    </CardGroup>
    <Footer/>
            </div>

            </>

            )
        }
    }