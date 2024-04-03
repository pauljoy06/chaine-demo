import * as React from "react"
import {
    Box,
    Grid,
    // theme,
    GridItem,
    Heading,

    Button,
    Flex,
    Spacer,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react"

import Sidebar from "../components/sidebar"
import { Link } from "react-router-dom"
import Header from "../components/header"

const ShipmentsPage: React.FC = () => {
    return <div className='shipments-page'>
        <Grid
            templateAreas={`
                "header         header"
                "sidebar        main"
            `}
            gridTemplateRows={'80px   calc(100vh - 80px)'}
            gridTemplateColumns={'180px   1fr'}
        >
            <GridItem area={'header'}>
                <Header />
            </GridItem>
            <GridItem area={'sidebar'}>
                <Sidebar />
            </GridItem>
            <GridItem area={'main'}>
                <Box pl={5} pt={5}>
                    <Heading as='h1' size='md'>Shipping</Heading>
                </Box>
                <Flex className='page-top-row' pl={5} pt={5} pr={5}>
                    <Spacer />
                    {/* TODO: Add the filter for Shipments*/}
                    <Button as={Link} to='/shipments/create' colorScheme='blue' size='sm'>New Shipment</Button>
                </Flex>
                <TableContainer ml='7' mt='7' mr='7' bg='white' borderRadius='10px'>
                    <Table variant='simple' bg='white'>
                        <Thead>
                            <Tr>
                                <Th>Shipper</Th>
                                <Th>Carrier</Th>
                                <Th>Content</Th>
                                <Th>Pickup Date</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>George Manson</Td>
                                <Td>Budget Haulers</Td>
                                <Td>Frozen Meat</Td>
                                <Td>05 April, 2024</Td>
                            </Tr>
                            <Tr>
                                <Td>Kevin McMahon</Td>
                                <Td>Reliable Transport</Td>
                                <Td>Frozen Meat, New Age Food</Td>
                                <Td>07 April, 2024</Td>
                            </Tr>
                            <Tr>
                                <Td>John Adams</Td>
                                <Td>Fast Track Shipping</Td>
                                <Td>Frozen Meat</Td>
                                <Td>11 April, 2024</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </GridItem>
        </Grid>
    </div>
}

export default ShipmentsPage;
