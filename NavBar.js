import {useEffect, useState} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import N_Icon1 from '../images/github2.svg';
import N_Icon2 from '../images/linkedin1.svg';
import N_Icon3 from '../images/instagram1.svg';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }
    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                seScrolled(true);
            }
            else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        window.addEventListener("resize", handleResize)
        
        return () =>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className = {scrolled ? "scrolled":""}>
          <Container>
            <Navbar.Brand href="/">Omar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href = "https://github.com/omar-cs"><img src={N_Icon1} alt = ""/></a>
                    <a href = "https://www.linkedin.com/in/omarcarrizales"><img src={N_Icon2} alt = ""/></a>
                    <a href = "https://www.instagram.com/ohmarcs/"><img src={N_Icon3} alt = ""/></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );

}