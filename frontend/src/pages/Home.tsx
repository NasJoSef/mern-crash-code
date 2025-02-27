import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useProductStore } from "../store/product.js"
import ProductCard from '../components/interne/ProductCard.js'


const Home = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  console.log("products : ", products)

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "18", sm:"20" }}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontWeight='bold'
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          Current Products 
        </Text>

        <SimpleGrid columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
        >
          {
            products.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))
          }
        </SimpleGrid>

          {
            products.length === 0 && (
              <Text fontSize='xl' textAlign='center' fontWeight='bold' color='gray.500'>
                No products found.{" "}
                <Link to='/create'>
                  <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
                    Create a product
                  </Text>
                </Link>
              </Text>)
          }

      </VStack>
    </Container>
  )
}

export default Home