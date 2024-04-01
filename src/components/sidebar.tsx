import * as React from "react"
import { Link } from 'react-router-dom';

import { Box } from "@chakra-ui/react"

const Sidebar: React.FC = () => {
          

    return <div className='sidebar'>
        <Link to={'/shipments'}>
            <Box bg='cyan' w='100%' p={4} color='black.100'>
                Shipments
            </Box>
        </Link>
        <Box bg='cyan' w='100%' p={4} color='gray.100'>
            Carriers
        </Box>
    </div>
}

export default Sidebar;