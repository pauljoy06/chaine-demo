import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    colors: {
        paul: {
            light: '#f7fafc',
            dark: '#333333',
        },
        grey: {
            dark: '#4f545a',
            light: '#868D98',
        }
    },
});

export default customTheme;