import * as React from "react"
import { Box } from "@chakra-ui/react"

const Sidebar: React.FC = () => {
    

    return <div className='sidebar'>
        <Box bg='cyan' w='100%' p={4} color='black.100'>
            Shipments
        </Box>
        <Box bg='cyan' w='100%' p={4} color='gray.100'>
            Carriers
        </Box>
    </div>
}

export default Sidebar;