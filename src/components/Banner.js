import { useState,useEffect } from "react";
import {Container,Row,Col} from "react-bootstrap";
import me from "../images/DSC00344-Edit.jpg"
//import {ArrowRightCircle} from "react-bootstrap-icons";

export const Banner = () =>{    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={5}>
                        <span className="tagline">Welcome   </span>
                        <h1>{`Hi, I'm Omar!`}</h1>
                        <p>I am a junior at the University of Michigan majoring in Computer Science and minoring in Entrepreneurship. My interest is in artificial intelligence and the impact it can make in business operations.</p>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={me} alt ="me"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
