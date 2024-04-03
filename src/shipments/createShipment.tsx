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
    Stack,
    Radio,
    CheckboxGroup,
    Checkbox,
    Button,
    IconButton,
    Divider,
    AbsoluteCenter,
    Icon,
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
import React, { useState } from "react";
import { CarrierCard, FilterBox, Ratings } from "../components";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
// import { PiTruckThin } from "react-icons/pi";
// import { FaTruck } from "react-icons/fa6";

const CreateShipmentPage: React.FC = () => {
    const [page, setPage] = useState<number>(2);

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
                {page == 1 && <>
                    <Flex className='carriers-filters' direction='column' h='100%'>
                        <Box pl={5} pt={5}>
                            <Heading as='h1' size='md'>Add Shipment</Heading>
                        </Box>
                        <HStack pt='5'>
                            <Input placeholder='Pickup' maxW='250px' bg='white' />
                            <Input placeholder='Destination' maxW='250px' bg='white' />
                            <Input placeholder='Pickup Date' type='date' maxW='250px' bg='white' />
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
                                <Spacer />
                                <FilterBox title='Carrier Rating'>
                                    <Ratings rating={0} />
                                </FilterBox>
                                <Spacer />
                                <FilterBox title='On-time Delivery %'>
                                    <Stack>
                                        <Radio size='md' name='1' colorScheme='blue'>
                                            Radio
                                        </Radio>
                                        <Radio size='md' name='1' colorScheme='blue'>
                                            Radio
                                        </Radio>
                                        <Radio size='md' name='1' colorScheme='blue' defaultChecked>
                                            Radio
                                        </Radio>
                                        <Radio size='md' name='1' colorScheme='blue'>
                                            Radio
                                        </Radio>
                                        <Radio size='md' name='1' colorScheme='blue'>
                                            Radio
                                        </Radio>
                                    </Stack>
                                </FilterBox>
                                <Spacer />
                                <FilterBox title='Requirements'>
                                    <CheckboxGroup colorScheme='blue' defaultValue={['naruto', 'kakashi']}>
                                        <Stack spacing={[1, 5]}>
                                            <Checkbox value='naruto'>Naruto</Checkbox>
                                            <Checkbox value='sasuke'>Sasuke</Checkbox>
                                            <Checkbox value='kakashi'>Kakashi</Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </FilterBox>
                                <Box mt='20px'>
                                    <Button isDisabled={true} w='100%' colorScheme='green' size='lg'>Next</Button>
                                </Box>
                            </Flex>
                            <Spacer />
                            <Box className='carrier-results' p='45px' w='85%' bg='white' borderRadius='10px'>
                                <Heading as='h1' size='md'>Carriers</Heading>
                                <Flex className='carriers' gap='5' mt='30px'>
                                    <CarrierCard title='Transit Logistics' />
                                    <CarrierCard title='Transit Logistics' />
                                    <CarrierCard title='Transit Logistics' />
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                </>}
                {page == 2 && <Box>
                    <Heading mt='20px'>
                        <Flex gap='4'>
                            <IconButton icon={<ArrowBackIcon />} size='xl' aria-label='Confirmation' />
                            <Text>Confirmation</Text>
                        </Flex>
                    </Heading>
                    <Flex maxW='900px' mt='50px' bg='white' borderRadius='10px'>
                        <Box className='shipping-details' flexGrow='3' pt='50px' pl='50px' pb='50px' borderRight='1px' borderColor='gray.100'>
                            <Text fontSize='xl' fontWeight='bold'>Transit Logistics</Text>
                            <Flex pt='15px' pb='15px' pr='20px' borderTop='1px' borderBottom='1px' borderRight='1px' borderColor='gray.100'>
                                <Flex className='pickup-details' direction='column' gap='2'>
                                    <Text color='gray.500' fontSize='2xs' fontWeight='bold'>Starting at</Text>
                                    <Text fontWeight='bold'>Springfield</Text>
                                    <Text color='gray.500' fontSize='xs' fontWeight='bold'>on Apr 2, 2024</Text>
                                </Flex>
                                <Flex position='relative' flexGrow='1' padding='10' alignItems='center'>
                                    <Divider />
                                    <AbsoluteCenter bg='white' px='4'>
                                        <Icon as={ArrowForwardIcon} color='gray.400' />
                                    </AbsoluteCenter>
                                </Flex>
                                <Flex className='delivery-details' direction='column' gap='2'>
                                    <Text color='gray.500' fontSize='2xs' fontWeight='bold'>Delivery at</Text>
                                    <Text fontWeight='bold'>Springfield</Text>
                                    <Text color='gray.500' fontSize='xs' fontWeight='bold'>on Apr 2, 2024</Text>
                                </Flex>
                            </Flex>
                            <Box>
                                <Text>Full load container</Text>
                            </Box>
                        </Box>
                        <Box className='total-confirmation' flexGrow='1' mt='auto' mb='auto' pl='15px' pr='15px'>
                            <Flex direction='column'>
                                <Text ml='auto' mr='auto' fontSize='xs' fontWeight='bold' color='grey.500'>Total Cost</Text>
                                <Text ml='auto' mr='auto'fontSize='lg' fontWeight='bold'>2400</Text>
                                <Button mt='15px' colorScheme='green'>
                                    Confirm Booking
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>}
                {page == 3 && <>

                </>}
            </GridItem>
        </Grid>
    </div>
}


export default CreateShipmentPage;