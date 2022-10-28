import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Welcome = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Center height="100vh">
      <Flex direction="column">
        <Heading>Hi, {session?.user?.name} </Heading>
        <Button onClick={() => signOut()}>Logout</Button>
      </Flex>
    </Center>
  );
};

export default Welcome;
