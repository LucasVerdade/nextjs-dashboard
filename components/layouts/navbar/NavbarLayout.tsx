import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./NavbarLayout.module.css";

export interface INavbarLayout {}

const NavbarLayout: React.FC<INavbarLayout> = (args) => {
  return (
    <>
      <Navbar>
        <Container className={styles.container}>
          <Navbar.Brand href="#" style={{height: '100%', position: 'relative'}}>
            <Image src="/img/Leaf Main Logo.png" alt="Leaf logo" height={40} width="100%"/>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link href="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/about">About</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link href="/login">Cliente</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLayout;