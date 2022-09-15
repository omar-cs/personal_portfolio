import {Container,Row,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cpp from "../images/c++.svg";
import react from "../images/react.svg";
import python from "../images/python.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";

export const Skills= () =>{
    return(
        <section className = "skill" id = "skills">
            <div className="skill-section">
                <h1 className="skills-heading">Skills</h1>
                <Col className="skills-container">
                    <div className="skill-card">
                        <img src = {cpp} className="skill-img"alt = ""/>
                        <h1 className="skill-name">C++</h1>
                    </div>
                    <div className="skill-card">
                        <img src = {python} className="skill-img"alt = ""/>
                        <h1 className="skill-name">Python</h1>
                    </div>
                    <div className="skill-card">
                        <img src = {html} className="skill-img"alt = ""/>
                        <h1 className="skill-name">HTML</h1>
                    </div>
                    <div className="skill-card">
                        <img src = {css} className="skill-img"alt = ""/>
                        <h1 className="skill-name">CSS</h1>
                    </div>
                    <div className="skill-card">
                        <img src = {react} className="skill-img"alt = ""/>
                        <h1 className="skill-name">React</h1>
                    </div>
                </Col>
            </div>
        </section>
    )
};