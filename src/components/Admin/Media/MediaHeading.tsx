import { Flex, Button, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus, FaPlusSquare } from "react-icons/fa";
import UploadModal from "../../Modal/UploadModal";

const MediaHeading: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <Flex justify="space-between" align="center">
        <Text fontSize="3xl" fontWeight={500}>
          Media Library
        </Text>
        <Flex align="center" gap={2}>
          <Button variant="outline" leftIcon={<Icon as={FaPlus} />}>
            Add new folder
          </Button>
          <Button
            onClick={() => setOpen(true)}
            variant="solid"
            colorScheme="blue"
            leftIcon={<Icon as={FaPlusSquare} />}
          >
            Add new assets
          </Button>
        </Flex>
      </Flex>
      {open && <UploadModal open={open} onClose={closeModal} />}
    </>
  );
};

export default MediaHeading;
