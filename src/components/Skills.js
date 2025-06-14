import React from 'react';
import { Box, Heading, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { motion } from 'framer-motion';

const skillsData = {
  languages: ["Python", "Java", "SQL"],
  frontend: ["React", "HTML5", "CSS3", "JavaScript"],
  backend: ["Node.js", "Express", "GraphQL", "REST APIs"],
  devops: ["Git", "Docker", "Kubernetes"],
  core: ["Object Oriented Programming", "Operating Systems", "Computer Networks"],
};

const Skills = () => {
  const skillCategoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <Box id="skills" py={20}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">Skills</Heading>
      </motion.div>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div key={category}
            variants={skillCategoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md" mb={4} textTransform="capitalize">
                {category.replace('devops', 'DevOps/Tools').replace('frontend', 'Front-end Technologies').replace('backend', 'Back-end Technologies').replace('core', 'Core')}
              </Heading>
              <List spacing={3}>
                {skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex}
                    variants={skillItemVariants}
                  >
                    <ListItem>
                      <Icon as={MdCheckCircle} color="green.500" />
                      {skill}
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills; 