import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <Container maxW="container.lg" py={8}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App; 