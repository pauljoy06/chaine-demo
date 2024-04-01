import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  // Grid,
  // theme,
  // GridItem,
} from "@chakra-ui/react"

import ShipmentsPage from "./shipments";

import customTheme from "./theme"

export const App: React.FC = () => (
  <ChakraProvider theme={customTheme}>
    <Router>
      <Routes>
        <Route path='/' element={<ShipmentsPage />} />
        <Route path='/shipments' element={<ShipmentsPage />} />
        {/* <Route path='/' element={<CarriersPage />} /> */}
      </Routes>
    </Router>
  </ChakraProvider>
)
