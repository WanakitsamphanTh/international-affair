"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavigationBar(){
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const navLinks = [
    { name: "Home", href: "/en/" },
    { name: "International Partnerships", href: "/en/relation" },
    { name: "Courses", href: "/en/course" },
    { name: "Activities", href: "/en/activity" },
    { name: "Entry Japan", href: "/en/residence" },
    { name: "Accommodations", href: "/en/accommodation" },
    { name: "Messages", href: "/en/message" },
  ];

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} locale="en" href="/en/">
          <img
            src="https://www.sendai-nct.ac.jp/wp/wp-content/themes/lab-sendainct/assets/images/logo-en.svg"
            alt="Sendai KOSEN Logo"
            height={32}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          aria-expanded={expanded}
          onClick={handleToggle}
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(({ name, href }) => (
              <Nav.Link
                key={href}
                as={Link}
                href={href}
                onClick={handleLinkClick}
              >
                {name}
              </Nav.Link>
            ))}

            <Nav.Link
              as={Link}
              href="/ja"
              onClick={handleLinkClick}
              className="ms-lg-2 mt-2 mt-lg-0 bg-dark text-white rounded d-flex align-items-center justify-content-center"
              style={{ width: "80px", height: "40px" }}
            >
              日本語
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}