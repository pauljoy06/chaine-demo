import * as React from "react"
import { Link as RouterLink } from 'react-router-dom';

import { Box } from "@chakra-ui/react"

const Sidebar: React.FC = () => {
          

    return <Box className='sidebar' h='100%' bg='white' boxShadow='sm'>
        <RouterLink to='/shipments'>
            <Box w='100%' p={4} color='black.500'>
                Shipments
            </Box>
        </RouterLink>
        <RouterLink to='/carriers'>
            <Box w='100%' p={4} color='gray.500'>
                Carriers
            </Box>
        </RouterLink>
    </Box>
}

export default Sidebar;