import {
    Box,
    Flex,
    // Box,
    Grid,
    GridItem,
    HStack,
    Heading,
    Input,
    Spacer,
    Text,

    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    // SliderMark,
    // Heading,

    // Input,
    // InputGroup,
    // InputLeftAddon,
    // Button,
    // Flex,
    // Spacer,
} from "@chakra-ui/react"

import Sidebar from "../components/sidebar";
import Header from "../components/header";
import React from "react";

const CreateShipmentPage: React.FC = () => {
    return <div className='create-shipment-page'>
        <Grid
            templateAreas={`
                "header         header"
                "sidebar        main"
            `}
            gridTemplateRows='80px   calc(100vh - 80px)'
            gridTemplateColumns='180px   1fr'
        >
            <GridItem area='header'>
                <Header />
            </GridItem>
            <GridItem area='sidebar'>
                <Sidebar />
            </GridItem>
            <GridItem area='main' pl='5'>
                <Flex className='carriers-filters' direction='column' h='100%'>
                    <Box pl={5} pt={5}>
                        <Heading as='h1' size='md'>Add Shipment</Heading> 
                    </Box> 
                    <HStack pt='5'>
                        <Input placeholder='Pickup' maxW='250px' bg='white' />
                        <Input placeholder='Destination' maxW='250px' bg='white' />
                        <Input placeholder='Pickup Date' type='date' maxW='250px' bg='white'/>
                    </HStack>
                    <Flex className='carrier-listing-filters' flexGrow='1' gap='3' mt='15px' mr='15px' mb='15px'>
                        <Flex className='filters' direction='column' flexGrow='1' w='15%' borderRadius='10px'>
                            <FilterBox title='Cost'>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </FilterBox>
                            <FilterBox title='Cost'>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </FilterBox>
                        </Flex>
                        <Spacer />
                        <Box className='carrier-results' bg='purple.100' w='85%' borderRadius='10px'>
                        </Box>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    </div>
}

const FilterBox: React.FC<FilterBoxProps> = ({title, children}) => {
    return <Box className='filter-box' p='20px' bg='white' borderRadius='10px'>
        <Text size='xs' fontWeight='bold' mb='15px'>{title}</Text>
        <Box>
            {children}
        </Box>
    </Box>
}

interface FilterBoxProps {
    title: string,
    children: React.ReactNode,
}

export default CreateShipmentPage;