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
    <Box id="experience" py={{ base: 12, md: 20 }}>
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
          Experience
        </Heading>
      </motion.div>

      <VStack spacing={{ base: 6, md: 8 }} align="stretch" px={{ base: 4, md: 0 }}>
        {experienceData.map((exp, index) => (
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
                <Heading as="h3" size={{ base: "md", md: "lg" }} color="teal.500">{exp.title}</Heading>
                <Text 
                  fontSize={{ base: "sm", md: "md" }} 
                  fontWeight="bold" 
                  color={textColor}
                >
                  {exp.duration}
                </Text>
              </HStack>
              <HStack 
                justifyContent="space-between" 
                mb={4}
                direction={{ base: "column", sm: "row" }}
                align={{ base: "flex-start", sm: "center" }}
                spacing={{ base: 2, sm: 0 }}
              >
                <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>{exp.company}</Text>
                <Text fontSize={{ base: "sm", md: "md" }} color={textColor}>{exp.location}</Text>
              </HStack>
              <Divider mb={4} />
              <VStack align="stretch" spacing={{ base: 2, md: 3 }} mb={4}>
                {exp.description.map((desc, descIndex) => (
                  <Text 
                    key={descIndex} 
                    fontSize={{ base: "sm", md: "md" }} 
                    color={textColor}
                    lineHeight="tall"
                  >
                    • {desc}
                  </Text>
                ))}
              </VStack>
              <HStack wrap="wrap" spacing={2}>
                {exp.skills.map((skill, skillIndex) => (
                  <Tag 
                    key={skillIndex} 
                    size={{ base: "sm", md: "md" }} 
                    variant="solid" 
                    colorScheme="blue"
                  >
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