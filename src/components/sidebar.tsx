import * as React from "react"
import { Link as RouterLink } from 'react-router-dom';

import { Box } from "@chakra-ui/react"

const Sidebar: React.FC = () => {
          

    return <div className='sidebar'>
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
    </div>
}

export default Sidebar;