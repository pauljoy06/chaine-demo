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
    SliderMark,
    RadioGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';


import Sidebar from "../components/sidebar";
import Header from "../components/header";
import React, { useEffect, useState } from "react";
import { CarrierCard, FilterBox, Ratings } from "../components";

import { ArrowBackIcon, ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { APIGetCarriers, Carrier } from "../interfaces";
// import { PiTruckThin } from "react-icons/pi";
// import { FaTruck } from "react-icons/fa6";

const CreateShipmentPage: React.FC = () => {

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);
    const [sliderValue, setSliderValue] = useState<number>(10000);
    const [specialRequirements, setSpecialRequirements] = useState<string[]>([]);
    const [deliveryPercentage, setDeliveryPercentage] = useState<string>('0');
    const [starRating, setStarRating] = useState<number>(0);

    const [pickup, setPickup] = useState<string>('Springfield, NA');
    const [destination, setDestination] = useState<string>('San Jose, CA');
    const [shippingDate, setShippingDate] = useState<string>(`${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`);

    const [carriers, setCarriers] = useState<Carrier[]>([]);
    const [selectedCarrier, setSelectedCarrier] = useState<Carrier | null>(null);
    const [filteredCarriers, setFilteredCarriers] = useState<Carrier[]>([]);
    
    const { isOpen, onOpen, onClose } = useDisclosure()


    const onCheckBoxClick = (value: string): void => {
        let index = specialRequirements.indexOf(value);
        if (index != -1) {
            setSpecialRequirements(old => {
                let returnValue = old;
                returnValue.splice(index, 1)

                return returnValue;
            })
        } else {
            setSpecialRequirements([...specialRequirements, value]);
        }
    }

    const isChecked = (value: string): boolean => {
        return specialRequirements.includes(value)
    }

    const isCardSelected = (id: number): boolean => {
        return id === selectedCarrier?.id;
    }

    const onCardClick = (carrier: Carrier): void => {
        if (selectedCarrier?.id === carrier.id) {
            setSelectedCarrier(null);
        } else {
            setSelectedCarrier(carrier);
        }
    }

    const onModelClose = (): void => {
        console.log('On model close')
        navigate(`/shipments`)
        onClose();
    }

    useEffect(() => {
        const getAllCarriers = async () => {
            try {
                const response = await fetch('https://mocki.io/v1/b174654c-dc79-4ca9-9be3-976a206e145c');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: APIGetCarriers = await response.json();
                setCarriers(data['carriers']);
                setFilteredCarriers(data['carriers']);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

        getAllCarriers();
    }, []);

    useEffect(() => {
        let tempList = carriers
            .filter(carrier => (carrier.onTimeDeliveryPercentage * 100) > parseInt(deliveryPercentage))
            .filter(carrier => carrier.rating > starRating)
            .filter(carrier => carrier.cost < sliderValue);
        
        if (specialRequirements.length > 0) {
           tempList = tempList.filter(carrier =>
                carrier.specialRequirements.some(req => specialRequirements.includes(req))
            );
        }

        setFilteredCarriers(tempList);
        console.log(specialRequirements, carriers.map(carrier => carrier.specialRequirements))
    }, [deliveryPercentage, starRating, sliderValue, specialRequirements]);

    console.log('Sele', sliderValue, deliveryPercentage, starRating);

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
                {page == 1 && <Flex className='carriers-filters' direction='column' h='100%'>
                    <Box pl={5} pt={5}>
                        <Heading as='h1' size='md'>Add Shipment</Heading>
                    </Box>
                    <HStack pt='5'>
                        <Input placeholder='Pickup' maxW='250px' bg='white'
                            value={pickup}
                            onChange={e => setPickup(e.target.value)}
                            isRequired
                        />
                        <Input placeholder='Destination' maxW='250px' bg='white'
                            value={destination}
                            onChange={e => setDestination(e.target.value)}
                            isRequired
                        />
                        <Input placeholder='Pickup Date'
                            type='date'
                            maxW='250px'
                            bg='white'
                            value={shippingDate}
                            onChange={e => setShippingDate(e.target.value)}
                            isRequired
                        />
                    </HStack>
                    <Flex className='carrier-listing-filters' flexGrow='1' gap='3' mt='15px' mr='15px' mb='15px'>
                        <Flex className='filters' direction='column' flexGrow='1' w='15%' borderRadius='10px'>
                            <FilterBox title='Cost'>
                                <Slider
                                    value={sliderValue}
                                    onChange={(v) => setSliderValue(v)}
                                    min={0}
                                    max={2000}
                                    step={100}
                                    defaultValue={100}
                                    aria-label='slider-ex-1'
                                >
                                    <SliderMark
                                        value={sliderValue}
                                        textAlign='center'
                                        bg='blue.500'
                                        color='white'
                                        mt='-10'
                                        ml='-5'
                                        pl='1'
                                        pr='1'
                                        borderRadius={10}
                                    >
                                      ${sliderValue}
                                    </SliderMark>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </FilterBox>
                            <Spacer />
                            <FilterBox title='Carrier Rating'>
                                <Ratings rating={starRating} setRating={setStarRating} />
                            </FilterBox>
                            <Spacer />
                            <FilterBox title='On-time Delivery %'>
                                <RadioGroup onChange={setDeliveryPercentage}>
                                    <Stack>
                                        <Radio value='90' size='md' colorScheme='blue'>
                                            {'>  90'}
                                        </Radio>
                                        <Radio value='80' size='md' colorScheme='blue'>
                                            {'>  80'}
                                        </Radio>
                                        <Radio value='70' size='md' colorScheme='blue'>
                                            {'>  70'}
                                        </Radio>
                                        <Radio value='60' size='md' name='1' colorScheme='blue'>
                                            {'>  60'}
                                        </Radio>
                                        <Radio value='0' size='md' name='1' colorScheme='blue'>
                                            {'All values'}
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </FilterBox>
                            <Spacer />
                            <FilterBox title='Requirements'>
                                <CheckboxGroup colorScheme='blue' defaultValue={['naruto', 'kakashi']}>
                                    <Stack spacing={[1, 5]}>
                                        <Checkbox isChecked={isChecked('Oversized Loads')}
                                            onChange={() => onCheckBoxClick('Oversized Loads')}
                                            value='Oversized Loads'
                                        >
                                            Oversized Loads
                                        </Checkbox>
                                        <Checkbox isChecked={isChecked('Refrigerated')}
                                            onChange={() => onCheckBoxClick('Refrigerated')}
                                            value='Refrigerated'
                                        >
                                            Refridgerated

                                        </Checkbox>
                                        <Checkbox isChecked={isChecked('Eco-Friendly')}
                                            onChange={() => onCheckBoxClick('Eco-Friendly')}
                                            value='Eco-Friendly'
                                        >
                                            Eco-Friendly
                                        </Checkbox>
                                        <Checkbox isChecked={isChecked('Hazardous Materials')}
                                            onChange={() => onCheckBoxClick('Hazardous Materials')}
                                            value='Hazardous Materials'
                                        >
                                            Hazardous Materials
                                        </Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </FilterBox>
                            <Box mt='20px'>
                                <Button
                                    isDisabled={selectedCarrier ? false : true}
                                    w='100%'
                                    colorScheme='green'
                                    size='lg'
                                    onClick={e => setPage(2)}
                                >
                                    Next
                                </Button>
                            </Box>
                        </Flex>
                        <Spacer />
                        <Box className='carrier-results' p='45px' w='85%' bg='white' borderRadius='10px'>
                            <Heading as='h1' size='md'>Carriers</Heading>
                            <Flex className='carriers' wrap='wrap' gap='7' mt='30px'>
                                {filteredCarriers.map(carrier => <CarrierCard
                                    name={carrier.name}
                                    rating={carrier.rating}
                                    onTimeDeliveryPercentage={carrier.onTimeDeliveryPercentage}
                                    cost={carrier.cost}
                                    specialRequirements={carrier.specialRequirements}
                                    availability={carrier.availability}
                                    isSelected={isCardSelected(carrier.id)}
                                    onClick={onCardClick}
                                    carrier={carrier}
                                />)}
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>}
                {page == 2 && <Box>
                    <Heading mt='20px'>
                        <Flex gap='4'>
                            <IconButton
                                icon={<ArrowBackIcon />}
                                size='xl'
                                aria-label='Confirmation'
                                onClick={e => setPage(1)}
                            />
                            <Text>Confirmation</Text>
                        </Flex>
                    </Heading>
                    <Flex maxW='900px' mt='50px' bg='white' borderRadius='10px'>
                        <Box className='shipping-details' flexGrow='3' pt='50px' pl='50px' pb='50px' borderRight='1px' borderColor='gray.100'>
                            <Text fontSize='xl' fontWeight='bold'>{selectedCarrier?.name}</Text>
                            <Flex pt='15px' pb='15px' pr='20px' borderTop='1px' borderBottom='1px' borderRight='1px' borderColor='gray.100'>
                                <Flex className='pickup-details' direction='column' gap='2'>
                                    <Text color='gray.500' fontSize='2xs' fontWeight='bold'>Starting at</Text>
                                    <Text fontWeight='bold'>{pickup}</Text>
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
                                    <Text fontWeight='bold'>{destination}</Text>
                                    <Text color='gray.500' fontSize='xs' fontWeight='bold'>NA</Text>
                                </Flex>
                            </Flex>
                            <Box mt='20px'>
                                <Text>Full load container</Text>
                            </Box>
                        </Box>
                        <Box className='total-confirmation' flexGrow='1' mt='auto' mb='auto' pl='15px' pr='15px'>
                            <Flex direction='column'>
                                <Text ml='auto' mr='auto' fontSize='xs' fontWeight='bold' color='grey.500'>Total Cost</Text>
                                <Text ml='auto' mr='auto' fontSize='lg' fontWeight='bold'>{selectedCarrier?.cost}</Text>
                                <Button mt='15px' colorScheme='green' onClick={onOpen}>
                                    Confirm Booking
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>}
                <Modal onClose={onModelClose} size='lg' isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex direction={'column'}  justify='center' align='center' mt='10'>
                                <CheckCircleIcon boxSize={20} color='green' /> 
                                <Text mt={5} color='green' fontWeight='bold'>Booking Confirmed</Text>
                            </Flex>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onModelClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </GridItem>
        </Grid>
    </div>
}

export default CreateShipmentPage;
