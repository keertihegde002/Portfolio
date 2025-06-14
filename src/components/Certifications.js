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
      title: 'Python Data Structures',
      issuer: 'University of Michigan',
      link: '#', // Replace with actual certificate link
    },
    {
      title: 'Introduction to Python Programming',
      issuer: 'Microsoft',
      link: '#', // Replace with actual certificate link
    },
    {
      title: 'Azure Fundamentals',
      issuer: 'Microsoft',
      link: '#', // Replace with actual certificate link
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box id="certifications" py={20}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">Certifications</Heading>
      </motion.div>

      <VStack spacing={8} align="stretch">
        {certificationsData.map((cert, index) => (
          <motion.div key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
              <HStack justifyContent="space-between" mb={2}>
                <Heading as="h3" size="lg" color="teal.500">{cert.title}</Heading>
                <Link href={cert.link} isExternal style={{ textDecoration: 'none' }}>
                  <Icon as={FaExternalLinkAlt} w={4} h={4} color="teal.500" _hover={{ color: 'teal.600' }} />
                </Link>
              </HStack>
              <Text fontSize="md" color={textColor}>{cert.issuer}</Text>
            </Box>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default Certifications; 