import React from 'react';
import { Box, Flex, Link, Button, Stack, IconButton, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/system';
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} px={4} shadow="md">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="xl" fontWeight="bold">Keerti Hegde</Text>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Link as={motion.a} whileHover={{ scale: 1.05 }} href="#about" px={2} py={1} rounded={'md'}>About</Link>
            <Link as={motion.a} whileHover={{ scale: 1.05 }} href="#experience" px={2} py={1} rounded={'md'}>Experience</Link>
            <Link as={motion.a} whileHover={{ scale: 1.05 }} href="#projects" px={2} py={1} rounded={'md'}>Projects</Link>
            <Link as={motion.a} whileHover={{ scale: 1.05 }} href="#skills" px={2} py={1} rounded={'md'}>Skills</Link>
            <Link as={motion.a} whileHover={{ scale: 1.05 }} href="#certifications" px={2} py={1} rounded={'md'}>Certifications</Link>
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
            />
            <Link href="https://github.com/keertihegde002" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} />
            </Link>
            <Link href="https://linkedin.com/in/keerti-hegde" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
            </Link>
            <Link href="mailto:keertihegde002@gmail.com">
              <IconButton aria-label="Email" icon={<FaEnvelope />} />
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar; 