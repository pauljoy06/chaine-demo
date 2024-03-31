import {
  ChakraProvider,
  Grid,
  // theme,
  GridItem,
} from "@chakra-ui/react"

import Sidebar from "./components/sidebar"
import customTheme from "./theme"

export const App = () => (
  <ChakraProvider theme={customTheme}>
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
      <GridItem area={'main'} bg='blue.300'></GridItem>
    </Grid>
  </ChakraProvider>
)
