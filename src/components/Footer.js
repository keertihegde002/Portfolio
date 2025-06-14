import React from 'react';
import { Box, Text, Flex, Link, IconButton } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/system';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerBg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={footerBg} py={6} mt={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color={textColor} mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} Keerti Hegde. All rights reserved.
        </Text>
        <Flex>
          <Link href="https://github.com/keertihegde002" isExternal mx={2}>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" colorScheme="gray" />
          </Link>
          <Link href="https://linkedin.com/in/keerti-hegde" isExternal mx={2}>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="ghost" colorScheme="gray" />
          </Link>
          <Link href="mailto:keertihegde002@gmail.com" mx={2}>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" variant="ghost" colorScheme="gray" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer; 