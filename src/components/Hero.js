import React from 'react';
import { Box, Heading, Text, Flex, Image, Button, Stack, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Profile from '../assets/Profile.jpg'

const Hero = () => {
  return (
    <Container maxW="container.xl">
      <Flex 
        id="hero"
        alignItems="center"
        justifyContent="center"
        py={{ base: 10, md: 20 }}
        flexDirection={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
        gap={{ base: 8, md: 12 }}
      >
        <Box 
          flex="1" 
          order={{ base: 2, md: 1 }}
          px={{ base: 4, md: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading 
              as="h1" 
              size={{ base: "xl", md: "2xl" }} 
              mb={4}
              lineHeight="1.2"
            >
              Hi, I'm <Text as="span" color="teal.500">Keerti Hegde</Text>
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text 
              fontSize={{ base: "lg", md: "xl" }} 
              mb={6}
              color="gray.600"
            >
              A Frontend Engineer passionate about building engaging web experiences.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Stack 
              direction={{ base: 'column', sm: 'row' }} 
              spacing={4} 
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <Button 
                variant="outline" 
                size={{ base: "md", md: "lg" }}
                as="a" 
                colorScheme="teal"
                href="mailto:keertihegde002@gmail.com"
                _hover={{ 
                  textDecoration: 'none',
                  bg: 'teal.50',
                  color: 'teal.500'
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          order={{ base: 1, md: 2 }}
        >
          <Image 
            borderRadius="full"
            boxSize={{ base: "250px", md: "300px" }}
            src={Profile}
            alt="Keerti Hegde"
            objectFit="cover"
            boxShadow="xl"
          />
        </motion.div>
      </Flex>
    </Container>
  );
};

export default Hero; 