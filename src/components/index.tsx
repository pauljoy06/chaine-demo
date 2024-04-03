import { Box, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Icon, IconButton, Spacer, Tag, TagLabel, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { CarrierCardProps, FilterBoxProps, KeyValueProps, RatingsProps } from "../interfaces";

const Ratings: React.FC<RatingsProps> = ({rating, setRating, maxRating = 5}) => {
    return <Flex gap='2'>
        {Array.from({ length: maxRating }, (_, index) => <IconButton
            icon={<StarIcon />}
            key={index}
            color={index < rating ? 'yellow.400': 'gray.300' }
            aria-label=''
            colorScheme='white'
            onClick={() => setRating(index + 1)}
            size='lm'
        />)}
    </Flex>
};

const KeyValueBox: React.FC<KeyValueProps> = ({ title, value}) => {
    return <Box className='key-value-box'>
        <Text fontSize='xs' color='gray.400'>{title}</Text>
        <Text color='black.100'>{value}</Text>
    </Box>
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

export {
    Ratings,
    FilterBox,
    KeyValueBox,
    CarrierCard
}
