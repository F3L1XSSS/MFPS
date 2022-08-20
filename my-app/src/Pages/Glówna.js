import React, { Component } from "react";
import { Card, CardGroup, CardImg, Button, Container, Col, Row, NavLink } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { MDBTypography } from 'mdb-react-ui-kit';

//Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Assets
import qq1 from "../Assets/qq1.jpg";
import qq2 from "../Assets/qq2.jpg";
import qq3 from "../Assets/qq3.jpg";
import qq4 from "../Assets/qq4.jpg";
import qq5 from "../Assets/qq5.jpg";
import Baner from "../Assets/Bangl.jpg";
import Footer from "../Components/Footer";
import { StyleSheetManager } from "styled-components";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default class Glówna extends Component{
    render(){
        return(
            <>
            <div>
                <div className="page-title">
                    <CarouselBox />
                </div>
                <div className="page-title">
                    <div className="text-center">
                        <p><br/></p>
                        <h2 className="title">NASZE PROJECTY</h2>
                        <p tag='small'>Nasze Projekty  - to więcej niż zbiórka pomocy charytatywnej,<br/> to stowarzyszenie dla wspólnego celu.</p>
                    </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    //navigation
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
                            <Card.Title>Pomoc ZSU</Card.Title>
                            <Card.Text>
                                Pomóż zbrojnym śiłam Ukrainy
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

                <SwiperSlide>
                    <NavLink href="infoq5">
                        <Card>
                            <Card.Img className="btn img" variant="top" src={qq5} />
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
            </Swiper>
            <h1><br/><br/></h1>
                <div className="mx-5 d-block">
                    <Row className="mx-5"> 
                        <Col md="11" className="mx-5">
                        <Card className="page-title mx-5" border="light">
                            <Card.Img variant="top" src={Baner} alt="..." height="500px" width="500px" class="img-fluid mx-auto d-block m-2"/> 
                                <Card.Body>
                                <CardHeader><h2 className="title text-center m-4">Zebranie dla zespołu</h2></CardHeader>
                                    <Card.Text>
                                    <MDBTypography tag='medium'>
                            Międzynarodowa Fundacja Pomocy Społecznej utworzyła zbiórkę pieniędzy dla 92 brygady na Ukrainie i szuka nieobojętnych osób które mogą pomóc nam stworzyć mocną tarczę od agresora.
                            Nasza fundacja zajmuje się pomocą Ukraińcom w Ukrainie, my wspieramy każdego dołączyć się do naszej pracy humanitarnej.<br/>
                            Nasz przyjaciel Daniił uprzejmie podszedł do nas i poprosił o pomoc dla swojego zespołu. Daniił i jego przyjaciele od początku wojny bronią Ukrainę i Europę.
                            Nasi przyjaciele są tarczą całego cywilizowanego świata. Chcemy pomóc im kontynuować ciężką pracę.
                            Codziennie bronią granicy Ukrainy przed agresorem. Potrzebują pomocy każdego dnia. Każdego dnia ryzykują życiem, aby nasze dzieci mogły żyć w cywilizowanym, demokratycznym świecie przyszłości.
                            Pomóż chłopakom bronić Europę przed wojną!
                            Każdego dnia oni potrzebują jedzenia, wody i sprzętu! Nasi drodzy bracia z 92 brygady serdecznie proszą nasz Międzynarodowy Fundusz Pomocy Społecznej o stworzenie zgromadzenia pomocy!<br/>
                            Odpowiedzieliśmy i pomogliśmy im stworzyć silną tarczę chroniącą wolność wszystkich cywilizowanych ludzi!<br/>
                            Wojownicy potrzebują: <br/>
                            1) 3 pickupy do misji bojowych <br/>
                            2) 5 dronów Mark 3 do misji bojowych <br/>
                            3) Pomoc humanitarna (żywność, produkty higieniczne, artykuły medyczne)<br/>
                            Nasza fundacja zobowiązuje się przekazać wszystko, co niezbędne w Ukrainę! <br/>
                            Proszę nie bądź obojętny!<br/>
                            Przekaż darowiznę i rozpowszechnij projekt. To niesamowite, jak 1 złotówka może wpłynąć na to, co dzieje się na świecie! <br/>
                            </MDBTypography>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </div>
                    <h1><br/></h1>
                </div>
            <div className="page-title">
                <Footer/>
            </div>
            
        </div>
        </>
        )
    }
}