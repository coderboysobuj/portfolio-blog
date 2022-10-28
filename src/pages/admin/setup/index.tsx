import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaEarlybirds,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { MdEmail } from "react-icons/md";

const Setup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const router = useRouter();

  const togglePassword = () => setShow((prev) => !prev);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password doesn't match");

      return;
    }
    setLoading(true);

    try {
      const response = await axios.post("/api/admin/create", {
        name,
        email,
        password,
      });
      toast.success(response.data?.message);
      console.log(response.data?.user);
      if (response.data?.user) {
        const credentials = {
          email: response.data.user.email,
          password: response.data.user.password,
        };
        signIn("credentials", { ...credentials, redirect: false })
          .then((res) => {
            router.push("/admin/setup/welcome");
          })
          .catch((err) => {
            console.log("Login error", err);
          });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Flex
      justify="center"
      height="100vh"
      width="100%"
      align={{ base: "center", md: "flex-start" }}
      mt={{ base: "0px", md: "50px" }}
    >
      <Box
        maxWidth="600px"
        bg="whiteAlpha.100"
        padding="40px"
        boxShadow="dark-lg"
        rounded="md"
      >
        <Stack spacing={8}>
          <Heading>Create an admin</Heading>
          <form onSubmit={submitHandler}>
            <Stack spacing={5}>
              <Stack>
                <FormControl>
                  <FormLabel>Full Name*</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={FaUser} />
                    </InputLeftElement>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Email address*</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={MdEmail} />
                    </InputLeftElement>
                    <Input
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Password*</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={FaLock} />
                    </InputLeftElement>
                    <Input
                      value={password}
                      type={show ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                      <IconButton
                        onClick={() => togglePassword()}
                        aria-label="show_hide"
                        icon={<Icon as={show ? FaEyeSlash : FaEye} />}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText>use uppercase, number symble</FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm Password*</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Icon as={FaLock} />
                    </InputLeftElement>
                    <Input
                      type={show ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
              <Button isLoading={loading} type="submit">
                Create
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Setup;
