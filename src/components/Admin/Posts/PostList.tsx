import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Icon,
  Tfoot,
  Image,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";

const PostList = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Post List</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Thumbnail</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>How to make ..</Td>
            <Td>
              {/* <Image
                width="50px"
                height="50px"
                border="2px"
                borderColor="blue.400"
                borderRadius="full"
                objectFit="cover"
                src="/images/demo.png"
              /> */}
              <Avatar src="/images/demo.png" />
            </Td>
            <Td>
              <IconButton
                aria-label="Edit"
                icon={<Icon as={FaEdit} fontSize="xl" />}
              ></IconButton>
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>How to make ..</Td>
            <Td>
              <Image
                width="50px"
                height="50px"
                border="2px"
                borderColor="blue.400"
                borderRadius="full"
                objectFit="cover"
                src="/images/demo.png"
              />
            </Td>
            <Td>
              <IconButton
                aria-label="Edit"
                icon={<Icon as={FaEdit} fontSize="xl" />}
              ></IconButton>
            </Td>
          </Tr>
          <Tr>
            <Td>1</Td>
            <Td>How to make ..</Td>
            <Td>
              <Image
                width="50px"
                height="50px"
                border="2px"
                borderColor="blue.400"
                borderRadius="full"
                objectFit="cover"
                src="/images/demo.png"
              />
            </Td>
            <Td>
              <IconButton
                aria-label="Edit"
                icon={<Icon as={FaEdit} fontSize="xl" />}
              ></IconButton>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>ID</Th>
            <Th>Username</Th>
            <Th>Status</Th>
            <Th>Edit</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default PostList;
