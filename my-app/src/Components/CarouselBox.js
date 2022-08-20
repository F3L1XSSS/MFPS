import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

//Assets
import q1 from "../Assets/q1.jpg";
import q3 from "../Assets/q3.jpg";
import q4 from "../Assets/q4.jpg";

export default class Home extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 h-100"
                        src={q1}
                        alt="q1"
                    />
                    <Carousel.Caption>
                        <h4> </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={q3}
                        alt="q2"
                        />
                    <Carousel.Caption>
                        <h4>  </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={q4}
                        alt="q4"
                        />
                    <Carousel.Caption>
                        <h4>...</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        )
    }
}