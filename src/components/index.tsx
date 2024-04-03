import { Box, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { KeyValueProps, RatingsProps } from "../interfaces";

const Ratings: React.FC<RatingsProps> = ({rating, maxRating = 5}) => {
    return <Box>
        {Array.from({ length: maxRating }, (_, index) => <Icon
            as={StarIcon}
            key={index}
            color={index < rating ? 'yellow.400': 'gray.300' }
        />)}
    </Box>
};

const KeyValueBox: React.FC<KeyValueProps> = ({ title, value}) => {
    return <Box className='key-value-box'>
        <Text fontSize='xs' color='gray.400'>{title}</Text>
        <Text color='black.100'>{value}</Text>
    </Box>
}

export {
    Ratings,
    KeyValueBox,
}