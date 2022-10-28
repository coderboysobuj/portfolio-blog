import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
  HStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit, FaFacebook, FaTwitter } from "react-icons/fa";
import Layout from "../../components/Admin/Layout";

const users = () => {
  return (
    <Layout>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Users list</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Username</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Sabbir</Td>
              <Td>Active</Td>
              <Td>
                <IconButton
                  aria-label="Edit"
                  icon={<Icon as={FaEdit} fontSize="xl" />}
                ></IconButton>
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Sabbir</Td>
              <Td>Active</Td>
              <Td>
                <IconButton
                  aria-label="Edit"
                  icon={<Icon as={FaEdit} fontSize="xl" />}
                ></IconButton>
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Sabbir</Td>
              <Td>Active</Td>
              <Td>
                <IconButton
                  aria-label="Edit"
                  icon={<Icon as={FaEdit} fontSize="xl" />}
                ></IconButton>
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Sabbir</Td>
              <Td>Active</Td>
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
    </Layout>
  );
};

export default users;
