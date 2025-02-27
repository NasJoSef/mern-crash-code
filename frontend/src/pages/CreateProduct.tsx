import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from "../store/product.js"

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  })
  const toast = useToast()
  const { createProduct } = useProductStore()
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct)

    if(success){
      toast({
        title: 'Product created',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setNewProduct({ name: "", image: "", price: "" })
    }else{
      toast({
        title: 'Error creating product',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    console.log("Success : ", success, " - Message : ", message)
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={'h1'} size={"2xl"} textAlign={"center"} mb={8}>
          Create new product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input 
              placeholder='Product name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input 
              placeholder='Product price'
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder='Product image'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>
              Add product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreateProduct