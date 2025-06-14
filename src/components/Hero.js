import React from 'react';
import { Box, Heading, Text, Flex, Image, Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Profile from '../assets/Profile.jpg'

const Hero = () => {
  return (
    <Flex 
      id="hero"
      alignItems="center"
      justifyContent="center"
      py={20}
      flexDirection={{ base: 'column', md: 'row' }}
      textAlign={{ base: 'center', md: 'left' }}
    >
      <Box mr={{ base: 0, md: 10 }} mb={{ base: 10, md: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Hi, I'm <Text as="span" color="teal.500">Keerti Hegde</Text>
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Text fontSize="xl" mb={6}>
            An Application Engineer passionate about building engaging web experiences.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent={{ base: 'center', md: 'flex-start' }}>
            <Button colorScheme="teal" size="lg">View My Work</Button>
            <Button variant="outline" size="lg">Contact Me</Button>
          </Stack>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Placeholder for an image or animation */}
        <Image 
          borderRadius="full"
          boxSize="300px"
          src={Profile}
          alt="Keerti Hegde"
          objectFit="cover"
        />
      </motion.div>
    </Flex>
  );
};

export default Hero; 