import React from 'react';
import { Box, Heading, Text, VStack, HStack, Tag} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/layout';

import { motion } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/system';
const Experience = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const experienceData = [
    {
      title: 'Application Engineer I',
      company: 'Flipkart',
      duration: '07/24 – Present',
      location: 'Bengaluru, Karnataka',
      description: [
        'Developed and maintained responsive React components for the seller platform and vendor onboarding system.',
        'Improved user experience by optimizing API calls, reducing page load time by 35%.',
        'Collaborated with backend and product teams to revamp the vendor onboarding system, reducing manual work for the category team by 50%.',
        'Utilized Node.js, GraphQL, Express, and REST APIs to build and integrate key functionalities.',
        'Designed and implemented an internal tool to enable the operations team to map return locations independently, eliminating repetitive developer involvement.',
        'Automated the status-checking workflow, significantly reducing operational disruptions and developer support requests.',
      ],
      skills: ['React', 'Node.js', 'GraphQL', 'Express', 'REST APIs', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box id="experience" py={20}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">Experience</Heading>
      </motion.div>

      <VStack spacing={8} align="stretch">
        {experienceData.map((exp, index) => (
          <motion.div key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
              <HStack justifyContent="space-between" mb={2}>
                <Heading as="h3" size="lg" color="teal.500">{exp.title}</Heading>
                <Text fontSize="md" fontWeight="bold" color={textColor}>{exp.duration}</Text>
              </HStack>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontSize="md" color={textColor}>{exp.company}</Text>
                <Text fontSize="md" color={textColor}>{exp.location}</Text>
              </HStack>
              <Divider mb={4} />
              <VStack align="stretch" spacing={2} mb={4}>
                {exp.description.map((desc, descIndex) => (
                  <Text key={descIndex} fontSize="md" color={textColor}>• {desc}</Text>
                ))}
              </VStack>
              <HStack wrap="wrap" spacing={2}>
                {exp.skills.map((skill, skillIndex) => (
                  <Tag key={skillIndex} size="md" variant="solid" colorScheme="blue">
                    {skill}
                  </Tag>
                ))}
              </HStack>
            </Box>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience; 