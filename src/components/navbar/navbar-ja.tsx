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
    { name: "ホーム", href: "/ja/" },
    { name: "海外への留学", href: "/ja/course" },
    { name: "奨学金", href: "/ja/scholarship" },
    { name: "留学までのスケジュール", href: "/ja/schedule" },
    { name: "海外危機管理", href: "/ja/safety" },
    { name: "先輩からのメッセージ", href: "/ja/message" },
  ];

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} href="/en/">
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
              href="/en"
              onClick={handleLinkClick}
              className="ms-lg-2 mt-2 mt-lg-0 bg-dark text-white rounded d-flex align-items-center justify-content-center"
              style={{ width: "80px", height: "40px" }}
            >
              English
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}