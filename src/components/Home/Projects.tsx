import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Project } from "../../utils/types";

interface IProjectsProps {
  projects: Project[];
}

const Projects: React.FC<IProjectsProps> = ({ projects }) => {
  return (
    <Stack spacing={5} marginY="60px">
      <Heading size="md">Projects & Accomplishments</Heading>
      <Divider />
      <Stack spacing={4}>
        {projects.map((project, i) => (
          <div key={project.id}>
            {" "}
            <Text
              cursor="pointer"
              _hover={{ color: "green.400" }}
              transition="all 0.2s"
              key={project.id}
            >
              {project.title}
            </Text>
            {projects.length > i + 1 && <Divider />}
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
