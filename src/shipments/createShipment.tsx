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
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Tag,
    TagLabel,
    TagRightIcon,
    Icon,
    Divider,
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
import { CarrierCardProps, FilterBoxProps } from "../interfaces";
import { KeyValueBox, Ratings } from "../components";
import { StarIcon } from "@chakra-ui/icons";

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
            </GridItem>
        </Grid>
    </div>
}

const FilterBox: React.FC<FilterBoxProps> = ({ title, children }) => {
    return <Box className='filter-box' p='20px' bg='white' borderRadius='10px'>
        <Text size='xs' fontWeight='bold' mb='15px'>{title}</Text>
        <Box>
            {children}
        </Box>
    </Box>
}

const CarrierCard: React.FC<CarrierCardProps> = ({ title }) => {
    return <Card maxW='430px' borderRadius='20px'>
        <CardHeader>
            <Heading as='h1' size='md'>{title}</Heading> 
        </CardHeader>
        <CardBody>
            <Flex gap='3'>
                <KeyValueBox title='On-time delivery %' value='90%' />
                <KeyValueBox title='On-time delivery %' value='90%' />
                <KeyValueBox title='On-time delivery %' value='90%' />
            </Flex>
        </CardBody>
            <Divider mt='20px' borderColor='gray.300' />
        <CardFooter>
            <Flex w='100%'>
                <Tag
                    size='lg' key='sm'
                    borderRadius='full'
                    variant='solid'
                    bg='#cdfad9'
                    color='#29945a'
                >
                    <TagLabel>Available</TagLabel>
                </Tag> 
                <Spacer />
                <Flex align='center' gap='2'>
                    <Icon
                        as={StarIcon}
                        color='yellow.400'
                    />
                    <Text>4.8</Text>
                </Flex>
            </Flex>
        </CardFooter>
    </Card>
}

export default CreateShipmentPage;