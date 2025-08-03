import React from 'react';
import { Box, Heading, Text, VStack, HStack, Link, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/system';


const Certifications = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const certificationsData = [
    {
      title: 'Azure Fundamentals',
      issuer: 'Microsoft',
      link: 'https://drive.google.com/file/d/1bgBsNyOUW0oSslTEHFyqLzYffxKm45v2/view',
    },
    {
      title: 'Introduction to Python Programming',
      issuer: 'Microsoft',
      link: 'https://www.coursera.org/account/accomplishments/verify/NRWGBWPFYEYA',
    },
    {
      title: 'Python Data Structures',
      issuer: 'University of Michigan',
      link: '#',
    },
    
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box id="certifications" py={{ base: 12, md: 20 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading 
          as="h2" 
          size={{ base: "lg", md: "xl" }}
          mb={{ base: 6, md: 10 }}
          textAlign="center"
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Certifications
        </Heading>
      </motion.div>

      <VStack spacing={{ base: 6, md: 8 }} align="stretch" px={{ base: 4, md: 0 }}>
        {certificationsData.map((cert, index) => (
          <motion.div key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box 
              p={{ base: 4, md: 6 }} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="lg" 
              bg={cardBg}
            >
              <HStack 
                justifyContent="space-between" 
                mb={2}
                direction={{ base: "column", sm: "row" }}
                align={{ base: "flex-start", sm: "center" }}
                spacing={{ base: 2, sm: 0 }}
              >
                <Heading as="h3" size={{ base: "md", md: "lg" }} color="teal.500">{cert.title}</Heading>
                <Link href={cert.link} isExternal style={{ textDecoration: 'none' }}>
                  <Icon 
                    as={FaExternalLinkAlt} 
                    w={{ base: 3, md: 4 }} 
                    h={{ base: 3, md: 4 }} 
                    color="teal.500" 
                    _hover={{ color: 'teal.600' }} 
                  />
                </Link>
              </HStack>
              <Text 
                fontSize={{ base: "sm", md: "md" }} 
                color={textColor}
              >
                {cert.issuer}
              </Text>
            </Box>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default Certifications; 