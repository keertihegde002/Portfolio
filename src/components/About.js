import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUser, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const accentColor = useColorModeValue('teal.600', 'teal.300');

  const educationData = [
    {
      school: "Malla Reddy Engineering College",
      degree: "Bachelor of Technology in Computer Science",
      duration: "06/2020 – 06/2024",
      score: "CGPA: 8.71",
      highlights: ["Computer Science", "Web Development", "Data Structures"]
    },
    {
      school: "Kendriya Vidyalaya",
      degree: "Central Board of Secondary Education",
      duration: "2018 - 2020",
      score: "Percentage: 94.6",
      highlights: ["Science", "Mathematics", "Computer Science"]
    }
  ];

  return (
    <Box id="about" py={{ base: 12, md: 20 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading
          as="h2"
          size={{ base: "lg", md: "xl" }}
          mb={{ base: 4, md: 6 }}
          textAlign="center"
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
          fontWeight="extrabold"
        >
          About Me
        </Heading>
      </motion.div>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="stretch"
        mt={{ base: 6, md: 10 }}
        gap={{ base: 6, md: 8 }}
        px={{ base: 4, md: 0 }}
      >
        {/* Bio Section */}
        <Box flex="1" display="flex" flexDirection="column">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Flex alignItems="center" mb={{ base: 4, md: 6 }}>
              <FaUser size="24px" color="#319795" />
              <Heading as="h3" size={{ base: "md", md: "lg" }} ml={3}>Bio</Heading>
            </Flex>
            <Box
              p={{ base: 4, md: 6 }}
              bg={cardBg}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              flex="1"
            >
              <Stack spacing={{ base: 3, md: 4 }} height="100%">
                <Flex alignItems="center" mb={2}>
                  <FaBriefcase size="20px" color="#319795" />
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    ml={2}
                    color={accentColor}
                  >
                    Application Engineer I at Flipkart
                  </Text>
                </Flex>

                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={textColor}
                  lineHeight="tall"
                >
                  I’m passionate about building responsive and efficient web applications, optimizing API interactions, and delivering smooth, user-friendly experiences. I focus on performance, scalability, and creating intuitive interfaces that solve real-world problems.
                </Text>

                <Box mt={2}>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="medium"
                    mb={3}
                    color={textColor}
                  >
                    Core Technologies:
                  </Text>
                  <Flex wrap="wrap" gap={2}>
                    <Badge colorScheme="blue" variant="subtle" px={3} py={1} fontSize={{ base: "xs", md: "sm" }}>React</Badge>
                    <Badge colorScheme="purple" variant="subtle" px={3} py={1} fontSize={{ base: "xs", md: "sm" }}>Node.js</Badge>
                    <Badge colorScheme="green" variant="subtle" px={3} py={1} fontSize={{ base: "xs", md: "sm" }}>GraphQL</Badge>
                    <Badge colorScheme="orange" variant="subtle" px={3} py={1} fontSize={{ base: "xs", md: "sm" }}>REST APIs</Badge>
                    <Badge colorScheme="teal" variant="subtle" px={3} py={1} fontSize={{ base: "xs", md: "sm" }}>Django</Badge>
                    <Badge colorScheme="red" variant="subtle" px={3} py={1} fontSize={{ base: "xs", md: "sm" }}>Python</Badge>
                  </Flex>
                </Box>

                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={textColor}
                  lineHeight="tall"
                  mt={2}
                >
                  Experience in developing robust backend systems using Python and Django. Built RESTful APIs, handled data workflows, and ensured smooth system performance.
                </Text>
              </Stack>
            </Box>
          </motion.div>
        </Box>

        {/* Education Section */}
        <Box flex="1" display="flex" flexDirection="column">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Flex alignItems="center" mb={{ base: 4, md: 6 }}>
              <FaGraduationCap size="24px" color="#319795" />
              <Heading as="h3" size={{ base: "md", md: "lg" }} ml={3}>Education</Heading>
            </Flex>
            <Box
              p={{ base: 4, md: 6 }}
              bg={cardBg}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="md"
              flex="1"
            >
              <Stack spacing={{ base: 4, md: 6 }} height="100%">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Box
                      p={{ base: 4, md: 6 }}
                      bg={cardBg}
                      borderRadius="lg"
                      borderWidth="1px"
                      borderColor={borderColor}
                      boxShadow="sm"
                      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
                    >
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: "lg", md: "xl" }}
                        color="teal.500"
                        mb={2}
                      >
                        {edu.school}
                      </Text>
                      <Text fontSize={{ base: "sm", md: "md" }} mb={2}>{edu.degree}</Text>
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        mb={3}
                        direction={{ base: "column", sm: "row" }}
                        gap={{ base: 2, sm: 0 }}
                      >
                        <Text fontSize={{ base: "xs", md: "sm" }} color={textColor}>{edu.duration}</Text>
                        <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="bold" color="teal.500">{edu.score}</Text>
                      </Flex>
                      <Flex wrap="wrap" gap={2}>
                        {edu.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            colorScheme="teal"
                            variant="subtle"
                            px={2}
                            py={1}
                            fontSize={{ base: "xs", md: "sm" }}
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </Flex>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
