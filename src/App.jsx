import React from 'react'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagInicial from './pages/PagInicial'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PagInicial />} />
        <Route path='/cadastrar-fornecedor' element={<FornecedorForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App