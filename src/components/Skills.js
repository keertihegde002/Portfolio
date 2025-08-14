import React from 'react';
import { Box, Heading, SimpleGrid, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiGit,
  SiDocker,
  SiKubernetes
} from 'react-icons/si';
import { 
  FaCode, 
  FaServer, 
  FaNetworkWired,
  FaDatabase,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

const skillsData = {
  languages: [
    { name: "Python", icon: SiPython, color: "blue" },
    { name: "Java", icon: FaJava, color: "orange" },
    { name: "SQL", icon: FaDatabase, color: "cyan" }
  ],
  frontend: [
    { name: "React", icon: SiReact, color: "blue" },
    { name: "HTML5", icon: FaHtml5, color: "orange" },
    { name: "CSS3", icon: FaCss3Alt, color: "blue" },
    { name: "JavaScript", icon: SiJavascript, color: "yellow" }
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "green" },
    { name: "Express", icon: SiExpress, color: "gray" },
    { name: "GraphQL", icon: SiGraphql, color: "pink" },
    { name: "REST APIs", icon: FaServer, color: "orange" }
  ],
  devops: [
    { name: "Git", icon: SiGit, color: "orange" },
    { name: "Docker", icon: SiDocker, color: "blue" },
    { name: "Kubernetes", icon: SiKubernetes, color: "blue" }
  ],
  core: [
    { name: "Object Oriented Programming", icon: FaCode, color: "purple" },
    { name: "Operating Systems", icon: FaServer, color: "green" },
    { name: "Computer Networks", icon: FaNetworkWired, color: "blue" }
  ],
};

const Skills = () => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBg = useColorModeValue('gray.50', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const skillCategoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <Box id="skills" py={{ base: 12, md: 20 }}>
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
          Skills
        </Heading>
      </motion.div>

      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={{ base: 6, md: 10 }}
        px={{ base: 4, md: 0 }}
      >
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div key={category}
            variants={skillCategoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box 
              p={{ base: 4, md: 6 }}
              bg={cardBg}
              shadow="md" 
              borderWidth="1px" 
              borderColor={borderColor}
              borderRadius="lg"
              height="100%"
              _hover={{ 
                transform: 'translateY(-5px)',
                shadow: 'lg',
                borderColor: 'teal.300',
                transition: 'all 0.3s ease'
              }}
            >
              <Heading 
                as="h3" 
                size={{ base: "sm", md: "md" }}
                mb={{ base: 4, md: 6 }}
                textTransform="capitalize"
                color="teal.500"
              >
                {category.replace('devops', 'DevOps/Tools')
                  .replace('frontend', 'Front-end Technologies')
                  .replace('backend', 'Back-end Technologies')
                  .replace('core', 'Core')}
              </Heading>
              <List spacing={{ base: 3, md: 4 }}>
                {skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex}
                    variants={skillItemVariants}
                  >
                    <ListItem 
                      display="flex" 
                      alignItems="center"
                      p={2}
                      borderRadius="md"
                      height={{ base: "36px", md: "40px" }}
                      _hover={{ 
                        bg: hoverBg,
                        transform: 'translateX(5px)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Icon 
                        as={skill.icon} 
                        color={`${skill.color}.500`}
                        boxSize={{ base: 4, md: 5 }}
                        mr={3}
                      />
                      <Box 
                        color={textColor} 
                        flex="1"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {skill.name}
                      </Box>
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