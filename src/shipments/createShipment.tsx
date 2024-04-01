import {
    // Box,
    Grid,
    GridItem,
    // Heading,

    // Input,
    // InputGroup,
    // InputLeftAddon,
    // Button,
    // Flex,
    // Spacer,
} from "@chakra-ui/react"

import Sidebar from "../components/sidebar";

const CreateShipmentPage: React.FC = () => {
    return <div className='create-shipment-page'>
        <Grid
            templateAreas={`
                "header         header"
                "sidebar        main"
            `}
            gridTemplateRows='100px   calc(100vh - 100px)'
            gridTemplateColumns='180px   1fr'
        >
            <GridItem area='header'>
            </GridItem>
            <GridItem area='sidebar'>
                <Sidebar />
            </GridItem>
            <GridItem area='main'></GridItem>
        </Grid>
    </div>
}

export default CreateShipmentPage;