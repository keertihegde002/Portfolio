import React from 'react';
import { Box, Flex, Link, Stack, IconButton, Text, useDisclosure, Collapse } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/system';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
];

const Navbar = () => {
  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const hoverBg = useColorModeValue('gray.700', 'gray.800');
  const iconColor = useColorModeValue('gray.300', 'white');
  const iconHoverColor = useColorModeValue('white', 'gray.100');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={bgColor} px={4} shadow="md" position="sticky" top={0} zIndex={1000}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize="xl" fontWeight="bold" color="white">Keerti Hegde</Text>
        <Flex alignItems={'center'}>
          {/* Desktop Nav */}
          <Stack
            direction={'row'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            mr={4}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                px={2}
                py={1}
                rounded={'md'}
                color="white"
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBg,
                  color: 'teal.300',
                }}
                fontWeight="medium"
                fontSize="md"
              >
                {link.label}
              </Link>
            ))}
          </Stack>
          {/* Social Icons (Desktop) */}
          <Stack direction={'row'} spacing={2} display={{ base: 'none', md: 'flex' }}>
            <IconButton as="a" href="https://github.com/keertihegde002" aria-label="GitHub" icon={<FaGithub />} color={iconColor} variant="ghost" _hover={{ color: iconHoverColor }} />
            <IconButton as="a" href="https://linkedin.com/in/keertihegde002" aria-label="LinkedIn" icon={<FaLinkedin />} color={iconColor} variant="ghost" _hover={{ color: iconHoverColor }} />
            <IconButton as="a" href="mailto:keertihegde002@gmail.com" aria-label="Email" icon={<FaEnvelope />} color={iconColor} variant="ghost" _hover={{ color: iconHoverColor }} />
          </Stack>
          {/* Color Mode Switcher (optional) */}
          {/* <IconButton aria-label="Toggle color mode" icon={useColorModeValue(<FaMoon />, <FaSun />)} variant="ghost" ml={2} /> */}
          {/* Hamburger Menu (Mobile) */}
          <IconButton
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            display={{ base: 'flex', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
            bg={bgColor}
            _hover={{ bg: hoverBg }}
            ml={2}
          />
        </Flex>
      </Flex>
      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                px={2}
                py={2}
                rounded={'md'}
                color="white"
                _hover={{
                  textDecoration: 'none',
                  bg: hoverBg,
                  color: 'teal.300',
                }}
                fontWeight="medium"
                fontSize="md"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
            <Flex mt={2} gap={2}>
              <IconButton as="a" href="https://github.com/keertihegde002" aria-label="GitHub" icon={<FaGithub />} color={iconColor} variant="ghost" _hover={{ color: iconHoverColor }} />
              <IconButton as="a" href="https://linkedin.com/in/keertihegde002" aria-label="LinkedIn" icon={<FaLinkedin />} color={iconColor} variant="ghost" _hover={{ color: iconHoverColor }} />
              <IconButton as="a" href="mailto:keertihegde002@gmail.com" aria-label="Email" icon={<FaEnvelope />} color={iconColor} variant="ghost" _hover={{ color: iconHoverColor }} />
            </Flex>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar; 