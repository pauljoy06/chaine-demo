import * as React from "react"
import {
    Box,
    Grid,
    // theme,
    GridItem,
    Heading,

    Input,
    InputGroup,
    InputLeftAddon,
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
import { SearchIcon } from "@chakra-ui/icons"

import Sidebar from "../components/sidebar"
import { Link } from "react-router-dom"

const ShipmentsPage: React.FC = () => {


    return <div className='shipments-page'>
        <Grid
            templateAreas={`
                "header         header"
                "sidebar        main"
            `}
            gridTemplateRows={'100px   calc(100vh - 100px)'}
            gridTemplateColumns={'180px   1fr'}
        >
            <GridItem area={'header'} bg='orange.300'>
            </GridItem>
            <GridItem area={'sidebar'} bg='red.300'>
                <Sidebar />
            </GridItem>
            <GridItem area={'main'}>
                <Box pl={5} pt={5}>
                    <Heading as='h6' size='md'>Shipping</Heading>
                </Box>
                <Flex className='page-top-row' pl={5} pt={5} pr={5}>
                    <InputGroup size='sm' maxW='250'>
                        <InputLeftAddon bg='white' pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftAddon>
                        <Input placeholder='Search' borderLeft={0} />
                    </InputGroup>
                    <Spacer />
                    {/* TODO: Add the filter for Shipments*/}
                    <Button as={Link} to='/shipments/create' colorScheme='blue' size='sm'>New Shipment</Button>
                </Flex>
                <TableContainer pt='20' pl='5' pr='5' pb='10'>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Shipper</Th>
                                <Th>Carrier</Th>
                                <Th>Content</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Test 1</Td>
                                <Td> NAAAAAA</Td>
                                <Td>Frozen Meat</Td>
                            </Tr>
                            <Tr>
                                <Td>Test 1</Td>
                                <Td> NAAAAAA</Td>
                                <Td>Frozen Meat, New Age Food</Td>
                            </Tr>
                            <Tr>
                                <Td>Test 1</Td>
                                <Td> NAAAAAA</Td>
                                <Td>Frozen Meat</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </GridItem>
        </Grid>
    </div>
}

export default ShipmentsPage;