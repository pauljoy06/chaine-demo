import { Box, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { RatingsProps } from "../interfaces";

const Ratings: React.FC<RatingsProps> = ({rating, maxRating = 5}) => {
    return <Box>
        {Array.from({ length: maxRating }, (_, index) => <Icon
            as={StarIcon}
            key={index}
            color={index < rating ? 'yellow.400': 'gray.300' }
        />)}
    </Box>
};

export {
    Ratings,
}