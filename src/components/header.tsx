import { Box, Flex, Spacer } from "@chakra-ui/react";

const Header: React.FC = () => {
          

    return <Box className='header' zIndex='1' position='relative' h='80px' bg='white' boxShadow='md'>
        <Flex>
            <Box className='logo' h='80px'>
            </Box>
            <Spacer />
            <Box className='user-details' h='80px'>
            </Box>
        </Flex>
    </Box>
}

export default Header;