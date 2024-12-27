"use client";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false); // Manage the navbar's open state

  const handleToggle = () => {
    setExpanded(!expanded); // Toggle between open/close
  };

  const handleLinkClick = () => {
    setExpanded(false); // Close the navbar on link click
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      expanded={expanded} // Bind expanded state
    >
      <Container>
        <Navbar.Brand href="/ja/">
          <img
            src="https://www.sendai-nct.ac.jp/wp/wp-content/themes/lab-sendainct/assets/images/logo.svg"
            alt="Sendai KOSEN Logo"
            height="32"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/ja/" onClick={handleToggle}>
              ホーム
            </Nav.Link>
            <Nav.Link as={Link} href="/ja/courses" onClick={handleToggle}>
              海外への留学
            </Nav.Link>
            <Nav.Link as={Link} href="/ja/relation" onClick={handleToggle}>
              奨学金情報
            </Nav.Link>
            <Nav.Link as={Link} href="/ja/residence" onClick={handleToggle}>
              留学までのスケジュール
            </Nav.Link>
            <Nav.Link as={Link} href="/ja/accommodation" onClick={handleToggle}>
              海外危機管理
            </Nav.Link>
            <Nav.Link as={Link} href="/ja/message" onClick={handleToggle}>
              先輩からのメッセージ
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/en"
              className="d-inline-block bg-dark text-white rounded text-center"
              style={{ width: "80px", height: "40px" }}
              onClick={handleToggle}
            >
              <span className="d-inline-block" style={{ lineHeight: "20px" }}>
                ENG
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;