import React from 'react'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagInicial from './pages/PagInicial'
import Menu from './components/Menu'
import FornecedorList from './pages/Fornecedor/FornecedorList'


const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PagInicial />} />
        <Route path='/cadastrar-fornecedor' element={<FornecedorForm />} />
        <Route path='/listar-fornecedores' element={<FornecedorList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App