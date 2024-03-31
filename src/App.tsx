import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
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
      <GridItem area={'sidebar'} bg='red.300'></GridItem>
      <GridItem area={'main'} bg='blue.300'></GridItem>
    </Grid>
  </ChakraProvider>
)
