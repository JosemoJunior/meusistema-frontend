import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand className='fw-bold' as={Link} to='/'>
          MeuSistema
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='menu-principal' />
        <Navbar.Collapse id='menu-principal'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='listar-produtos'>Produtos</Nav.Link>
            <Nav.Link as={Link} to='listar-clientes'>Clientes</Nav.Link>
            <Nav.Link as={Link} to='listar-fornecedores'>Fornecedores</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<span><FaUserCircle className='me-2' />JosemoJr</span>} align="end">
              <NavDropdown.Item href='#perfil'>Meu Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#sair'>
                <FaSignOutAlt className='me-2' />
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
