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
    useSlider,
    RadioGroup,
} from "@chakra-ui/react"

import Sidebar from "../components/sidebar";
import Header from "../components/header";
import React, { useEffect, useState } from "react";
import { CarrierCard, FilterBox, Ratings } from "../components";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { APIGetCarriers, Carrier } from "../interfaces";
// import { PiTruckThin } from "react-icons/pi";
// import { FaTruck } from "react-icons/fa6";

const CreateShipmentPage: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [sliderValue, setSliderValue ] = useState<number>(100);
    // const [carrierRating, setCarrier]
    const [specialRequirements, setSpecialRequirements] = useState<string[]>([]);
    const [deliveryPercentage, setDeliveryPercentage] = useState<string>('90'); 
    const [starRating, setStarRating] = useState<number>(0);
    
    const [carriers, setCarriers] = useState<Carrier[]>([]);
    const [selectedCarrier, setSelectedCarrier] = useState<Carrier | null>(null);
    const onCheckBoxClick = (value: string): void => {
        let index = specialRequirements.indexOf(value);
        if(index != -1) {
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
        if(selectedCarrier?.id === carrier.id) {
            setSelectedCarrier(null);
        } else {
            setSelectedCarrier(carrier);
        }
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
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

        getAllCarriers();
    }, []);
    console.log('Slider', starRating)

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
                                    <Slider 
                                        value={sliderValue}
                                        onChange={(v) => setSliderValue(v)}
                                        min={0}
                                        max={10000}
                                        step={100}
                                        defaultValue={100}
                                        aria-label='slider-ex-1'
                                    >
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb />
                                    </Slider>
                                </FilterBox>
                                <Spacer />
                                <FilterBox title='Carrier Rating'>
                                    <Ratings rating={starRating} setRating={setStarRating}/>
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
                                            <Checkbox isChecked={isChecked('oversize')}
                                                onChange={() => onCheckBoxClick('oversize')}
                                                value='oversize'
                                            >
                                                Oversized Loads
                                            </Checkbox>
                                            <Checkbox value='sasuke'>Sasuke</Checkbox>
                                            <Checkbox value='kakashi'>Kakashi</Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </FilterBox>
                                <Box mt='20px'>
                                    <Button
                                        isDisabled={false}
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
                                    {carriers.map(carrier => <CarrierCard
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
                    </Flex>
                </>}
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
