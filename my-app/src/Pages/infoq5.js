import React, { Component } from "react";
import { Row, Col, Nav, NavLink, Container, Tab, TabContent, TabPane, Card, CardGroup, Form, ProgressBar, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBTypography } from 'mdb-react-ui-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

//Assets
import qq1 from "../Assets/qq1.jpg";
import qq2 from "../Assets/qq2.jpg";
import qq3 from "../Assets/qq3.jpg";
import qq4 from "../Assets/qq4.jpg";
import qq5 from "../Assets/qq5.jpg";

//Components
import Footer from "../Components/Footer";

export default class Kontakt extends Component{
    render(){
        return(
            <>
            <div className="page-title">
            <Row className="mx-4">
                        <Col md="9" className="mx-4">
                        <div className="d-flex align-items-center m-4 mx-4">
                            <div className="flex-shrink-0 mx-4">
                                <img src={qq5} alt="..." height="500px" width="500px" class="img-thumbnail mx-4"/>
                        </div>
                        <div className="mx-4 flex-grow-1 ms-3">
                            <h4 className="mx-4">Lorem Ipsum</h4>
                            <div className="progressBar mx-4 text-center m-3" style={{position: "relative", width: "30rem"}}>
                            <ProgressBar now={1} />
                        </div>

                            <MDBTypography tag='small' className="mx-4">
                                Pozostalo: <cite title='Source Title'>1 000 000 zł</cite>
                                </MDBTypography>
                                <MDBTypography tag='small' className="text-center mx-4">
                                Zebrano: <cite title='Source Title'>0 zł</cite>
                                </MDBTypography>
                                <MDBTypography tag='small' className="text-center mx-4">
                                Pozostalo: <cite title='Source Title'>1 000 000 zł</cite>
                                </MDBTypography>
                                <div className="m-4 mx-4">
                                <Button variant="outline-dark">Twoje wsparcie</Button>
                                </div>
                                </div>
                            </div>
                    </Col>
                </Row>
                    <Container>
                        <Tab.Container id="ledt-tub-example" defaultActiveKey="projekt">
                            <Row>
                                <Col sm={8}>
                                    <Nav className="flex-column mt-2">
                            <ul class="nav nav-tabs">
                                <li class="nav-item mx-3">
                            <Nav.Item>
                                <NavLink data-toggle="tab" eventKey="projekt"><p style={{color: "black"}}>O projekcie</p></NavLink>
                            </Nav.Item>     
                                </li>  
                                <li class="nav-item mx-3">                     
                            <Nav.Item>
                                <NavLink data-toggle="tab" eventKey="darczyncy"><p style={{color: "black"}}>Darczyńcy</p></NavLink>
                            </Nav.Item> 
                                </li> 
                                <li class="nav-item mx-3">                          
                            <Nav.Item>
                                <NavLink data-toggle="tab" eventKey="koment"><p style={{color: "black"}}>Komentarze</p></NavLink>
                            </Nav.Item>
                            </li> 
                            <li class="nav-item mx-3">                          
                            <Nav.Item>
                                <NavLink data-toggle="tab" eventKey="document"><p style={{color: "black"}}>Dokumentacja</p></NavLink>
                            </Nav.Item>
                            </li> 
                        </ul>
                    </Nav>
                </Col>
                <TabContent>
                            <TabPane eventKey="projekt">
                                <div class="maw_content m-3">
                                    <Card className="light-gray" style={{width: "50rem"}}>
                                        <Card.Text className="mx-4 m-4">
                                        <MDBTypography listUnStyled className='blockquote-footer mb-0'>
                                        Lorem Ipsum
                                </MDBTypography>
                                    </Card.Text>
                                </Card>
                                </div>
                            </TabPane>

                            <TabPane eventKey="darczyncy">
                                <h1></h1>
                            </TabPane>

                            <TabPane eventKey="koment">
                            <Card style={{width: "50rem"}} >
                            <Form.Group as={Row} className="mb-3 m-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                </Form.Label>   
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Twój komentarz" />
                                </Col>
                                <Form.Label column sm={1}>
                                </Form.Label>   
                            </Form.Group>
                                    <h1><br/><br/></h1>
                                    <MDBTypography listUnStyled className='mb-0 text-center'>Nie ma jeszcze komentarzy...</MDBTypography>
                                    <h1><br/><br/></h1>
                            </Card>
                            </TabPane>

                            <TabPane eventKey="dokument">
                                <h1></h1>
                            </TabPane>
                        </TabContent>
                </Row>                            
            </Tab.Container>
         </Container>


         <div>
                    <h1><br/></h1>
                    <div className="text-center">
                        <h2 className="title">INNE PROJECTY</h2>
                    </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                <CardGroup className="m-4">
                <SwiperSlide>
                    <NavLink href="/infoq1">
                        <Card>
                            <Card.Img className="btn img" variant="top" src={qq1} />
                            <Card.Body>
                                <Card.Title>Zwierzęta na Ukrainie</Card.Title>
                                    <Card.Text>
                                        Pomóż nam nakarmić bezdomne zwierzęta
                                    </Card.Text>
                            </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </NavLink>
                </SwiperSlide>

                <SwiperSlide>
            <NavLink href="/infoq2">
                <Card>
                    <Card.Img className="btn img" variant="top" src={qq2} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>
                                Lorem Ipsum
                            </Card.Text>
                        </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </NavLink>
                </SwiperSlide>
                <SwiperSlide>
            <NavLink href="/infoq3">
                <Card>
                    <Card.Img className="btn img" variant="top" src={qq3} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>
                                Lorem Ipsum
                            </Card.Text>
                        </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </NavLink>
                </SwiperSlide>
                <SwiperSlide>
            <NavLink href="/infoq4">
                <Card>
                    <Card.Img className="btn img" variant="top" src={qq4} />
                        <Card.Body>
                            <Card.Title>Lorem Ipsum</Card.Title>
                            <Card.Text>
                                Lorem Ipsum
                            </Card.Text>
                        </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </NavLink>
                </SwiperSlide>
                </CardGroup>
                <p><br/></p>
            </Swiper>
         <div className="page-title">
                <Footer/>
            </div>
            </div>
            </div>
            </>
        )
    }
}