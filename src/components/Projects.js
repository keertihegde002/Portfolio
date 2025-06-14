import React from 'react';
import { Box, Heading, Text, VStack, HStack, Tag, Link, Icon } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/system';

const Projects = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const projectsData = [
    {
      title: 'LearnTogether',
      technologies: ['Django', 'Python'],
      description: [
        'Developed a web application using the Django framework, allowing users to find and connect with other individuals to study online. It connects users with similar interests through customizable chat rooms.',
        'Implemented features such as user profile creation, topic-based chat room selection, and the ability for users to host and moderate their own rooms.',
        'Utilized Django\'s built-in ORM to create and manage a database to store user and chat room information.',
      ],
      link: '#', // Replace with actual project link
    },
    {
      title: 'PhotoAlbum',
      technologies: ['Python', 'Django', 'Bootstrap'],
      description: [
        'The web application supports various image formats, and users can provide meaningful descriptions to aid in image categorization, making it easy to store, organize, find and access specific images.',
        'Engineered advanced Django models to enhance search and filter capabilities, leading to 50 increase in user engagement and creating a dynamic, visually appealing image gallery for uploaded images.',
      ],
      link: '#', // Replace with actual project link
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box id="projects" py={20}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">Projects</Heading>
      </motion.div>

      <VStack spacing={8} align="stretch">
        {projectsData.map((project, index) => (
          <motion.div key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
              <HStack justifyContent="space-between" mb={2}>
                <Heading as="h3" size="lg" color="teal.500">{project.title}</Heading>
                <Link href={project.link} isExternal style={{ textDecoration: 'none' }}>
                  <Icon as={FaExternalLinkAlt} w={4} h={4} color="teal.500" _hover={{ color: 'teal.600' }} />
                </Link>
              </HStack>
              <HStack wrap="wrap" spacing={2} mb={4}>
                {project.technologies.map((tech, techIndex) => (
                  <Tag key={techIndex} size="md" variant="solid" colorScheme="purple">
                    {tech}
                  </Tag>
                ))}
              </HStack>
              <Divider mb={4} />
              <VStack align="stretch" spacing={2}>
                {project.description.map((desc, descIndex) => (
                  <Text key={descIndex} fontSize="md" color={textColor}>• {desc}</Text>
                ))}
              </VStack>
            </Box>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects; 