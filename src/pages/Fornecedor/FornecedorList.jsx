import React, { useEffect, useState } from 'react'
import {
  Button, Container, OverlayTrigger, Tooltip,
  Modal, Table
} from 'react-bootstrap'
import {
  FaEdit, FaPlus, FaQuestionCircle,
  FaTrash, FaExternalLinkAlt, FaExclamationTriangle
} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const FornecedorList = () => {
  const urlApi = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const [fornecedores, setFornecedor] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null)

  useEffect(() => {
    axios.get(`${urlApi}/fornecedores`)
      .then(response => setFornecedor(response.data))
      .catch(error => console.error('Erro ao carregar fornecedores: ', error))
  }, [])

  const fecharModal = () => {
    setModalAberto(false)
    setFornecedorSelecionado(null)
  }

  const abrirModal = (fornecedor) => {
    setFornecedorSelecionado(fornecedor)
    setModalAberto(true)
  }

  const removerFornecedor = () => {
    axios.delete(`${urlApi}/fornecedores/${fornecedorSelecionado.id}`)
      .then(() => {
        setFornecedor(prev => prev.filter(f => f.id !== fornecedorSelecionado.id))
        fecharModal()
      })
  }

  return (
    <Container className='mt-5'>
      <h2 className='mb-4 d-flex align-items-center mt-3'>
        Lista de Fornecedores
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>Visualize, edite ou exclua fornecedores</Tooltip>}
        >
          <span className="ms-2" style={{ cursor: 'pointer' }}>
            <FaQuestionCircle />
          </span>
        </OverlayTrigger>
      </h2>

      <div className='mb-3'>
        <Button variant='primary' as={Link} to='/cadastrar-fornecedor'>
          <FaPlus className='me-2' /> Adicionar Fornecedor
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map(fornecedor => (
            <tr key={fornecedor.id}>
              <td>{fornecedor.nome}</td>
              <td>{fornecedor.cnpj}</td>
              <td>{fornecedor.tipoFornecedor}</td>
              <td>
                <Button
                  variant='primary'
                  size='sm'
                  className='me-2'
                  title="Ver mais"
                  as={Link}
                  to={`/fornecedores/${fornecedor.id}`}
                >
                  <FaExternalLinkAlt className='me-1' /> Ver Mais
                </Button>

                <Button
                  variant='warning'
                  size='sm'
                  className='me-2'
                  title="Editar"
                  as={Link}
                  to={`/editar-fornecedor/${fornecedor.id}`}
                >
                  <FaEdit className='me-1' /> Editar
                </Button>

                <Button
                  variant='danger'
                  size='sm'
                  title="Excluir"
                  onClick={() => abrirModal(fornecedor)}
                >
                  <FaTrash className='me-1' /> Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={modalAberto} onHide={fecharModal} centered>
        <Modal.Header>
          <Modal.Title>
            <FaExclamationTriangle className='text-danger me-2' />
            Confirmar exclusão
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir o fornecedor: <strong>{fornecedorSelecionado?.nome}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={fecharModal}>Cancelar</Button>
          <Button variant='danger' onClick={removerFornecedor}>Excluir</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default FornecedorList
