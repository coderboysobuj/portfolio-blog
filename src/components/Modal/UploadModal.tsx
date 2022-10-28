import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { ChangeEvent, useRef } from "react";
import { MdAddAPhoto } from "react-icons/md";

interface IUploadModalProps {
  open: boolean;
  onClose: () => void;
}
const UploadModal: React.FC<IUploadModalProps> = ({ open, onClose }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };
  return (
    <>
      <Modal isOpen={open} onClose={onClose} size="3xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader bg="blackAlpha.600">Modal title</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="blackAlpha.100" padding={9}>
            <Flex
              width="100%"
              height="300px"
              cursor="pointer"
              bg="blackAlpha.600"
              border="5px dashed"
              borderColor="whiteAlpha.300"
              justify="center"
              align="center"
              direction="column"
              gap={3}
            >
              <Icon fontSize="6xl" color="blue.400" as={MdAddAPhoto} />
              <Text fontSize="lg" fontWeight={500} color="whiteAlpha.600">
                Drag & Drop or
              </Text>
              <Button
                onClick={() => fileRef.current?.click()}
                colorScheme="facebook"
              >
                Browse files
              </Button>
              <input
                type="file"
                onChange={fileHandler}
                hidden
                multiple
                ref={fileRef}
              />
            </Flex>
          </ModalBody>
          <ModalFooter bg="blackAlpha.600">
            <Button onClick={onClose} variant="outline">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadModal;
