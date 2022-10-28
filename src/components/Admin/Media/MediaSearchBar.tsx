import {
  Flex,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const MediaSearchBar: React.FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <Flex>
        <Checkbox />
      </Flex>
      <form>
        <InputGroup>
          <InputLeftElement height="33px">
            <Icon as={FaSearch} />
          </InputLeftElement>
          <Input variant="filled" height="33px" />
        </InputGroup>
      </form>
    </Flex>
  );
};

export default MediaSearchBar;
