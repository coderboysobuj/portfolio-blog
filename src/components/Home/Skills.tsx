import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Skill } from "../../utils/types";

interface ISkillsProps {
  skills: Skill[];
}

const Skills: React.FC<ISkillsProps> = ({ skills }) => {
  return (
    <Stack spacing={5} marginY="60px">
      <Heading size="md">Skills & Qualifications</Heading>
      <div
        style={{
          display: "block",
          marginBlockStart: "1em",

          marginBlockEnd: "1em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          paddingInlineStart: "40px",
        }}
      >
        {skills.map((skill) => (
          <Text key={skill.id}>{skill.title}</Text>
        ))}
      </div>
    </Stack>
  );
};

export default Skills;
