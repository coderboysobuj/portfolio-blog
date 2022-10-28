import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { MdEmail } from "react-icons/md";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const router = useRouter();

  const togglePassword = () => setShow((prev) => !prev);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const credentials = {
      email,
      password,
    };
    signIn("credentials", { ...credentials, redirect: false })
      .then((res) => {
        if (res?.ok) {
          toast.success("🚀 You are logged in");
          router.push("/admin");
        } else {
          toast.error("Invalid email or password!");
        }
      })
      .catch((err) => {
        toast.error("Invalid email or password");
      })
      .finally(() => {
        setLoading(false);
      });
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
          <Stack>
            <Heading>Admin Panel</Heading>
            <Text fontSize="2xl" fontWeight={500} color="whiteAlpha.300">
              Welcome back, login now
            </Text>
          </Stack>
          <form onSubmit={submitHandler}>
            <Stack spacing={5}>
              <Stack>
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
                </FormControl>
              </Stack>
              <Button isLoading={loading} type="submit">
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Login;
