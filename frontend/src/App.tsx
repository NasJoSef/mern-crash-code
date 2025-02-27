import { Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import Navbar from './components/interne/Navbar'

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateProduct />} />
      </Routes>
    </Box>
  )
}

export default App
