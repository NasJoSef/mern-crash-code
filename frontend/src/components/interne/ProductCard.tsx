import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'

const ProductCard = ({ product }: any) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bgColor = useColorModeValue("white", "gray.800")
    return (
        <Box
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bgColor}
        >
            <Image alt='' src='' h={48} w={'full'} objectFit={'cover'} />
            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                    {product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton aria-label='edit' icon={<EditIcon />} colorScheme='blue' />
                    <IconButton aria-label='delete' icon={<DeleteIcon />}  colorScheme='red' />
                </HStack>
            </Box>
        </Box>
    )
}

export default ProductCard