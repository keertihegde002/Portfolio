import React from 'react';
import { Box, Heading, Text, Flex, Stack, Spacer } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box id="about" py={20}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center">About Me</Heading>
      </motion.div>
      
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="flex-start" mt={10}>
        <Box flex="1" mr={{ base: 0, md: 10 }} mb={{ base: 10, md: 0 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading as="h3" size="lg" mb={4}>Education</Heading>
            <Stack spacing={4}>
              <Box>
                <Text fontWeight="bold" fontSize="lg">Malla Reddy Engineering College</Text>
                <Text fontSize="md">Bachelor of Technology in Computer Science</Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="sm">06/2020 – 06/2024</Text>
                  <Text fontSize="sm">CGPA: 8.71</Text>
                </Flex>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="lg">Kendriya Vidyalaya</Text>
                <Text fontSize="md">Central Board of Secondary Education</Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="sm">2018 - 2020</Text>
                  <Text fontSize="sm">Percentage: 94.6</Text>
                </Flex>
              </Box>
            </Stack>
          </motion.div>
        </Box>

        <Box flex="1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Heading as="h3" size="lg" mb={4}>Bio</Heading>
            <Text fontSize="md">
              I am an Application Engineer I at Flipkart with a strong foundation in React, Node.js, GraphQL, and REST APIs. I am passionate about developing responsive and efficient web applications, optimizing API calls, and improving user experiences. My expertise also includes database management with Django's ORM and contributing to open-source projects.
            </Text>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default About; 