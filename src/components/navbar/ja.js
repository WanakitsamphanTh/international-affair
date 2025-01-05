"use client";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const navLinks = [
    { href: "/ja/", text: "ホーム" },
    { href: "/ja/course", text: "海外への留学" },
    { href: "/ja/scholarship", text: "留学サポート" },
    { href: "/ja/schedule", text: "留学までのスケジュール" },
    { href: "/ja/safety", text: "海外危機管理" },
    { href: "/ja/message", text: "先輩からのメッセージ" }
  ];

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      expanded={expanded}
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

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleToggle}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                as={Link}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.text}
              </Nav.Link>
            ))}

            <Nav.Link
              as={Link}
              href="/en"
              onClick={handleLinkClick}
              className="ms-2 bg-dark text-white rounded d-flex align-items-center justify-content-center"
              style={{ 
                width: "80px", 
                height: "40px",
                lineHeight: "40px"
              }}
            >
              ENG
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;