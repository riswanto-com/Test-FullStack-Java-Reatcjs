import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function NavbarCommponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Test SKill
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
