import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";

import { MdAddAPhoto, MdConfirmationNumber, MdRefresh } from "react-icons/md";
import Layout from "../../../components/Admin/Layout";

const create = () => {
  const [tags, setTags] = useState<Array<string>>([]);
  const [tag, setTag] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const imageRef = useRef<HTMLInputElement>(null);

  const handleTagChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const handleTagMaking = (e: KeyboardEvent) => {
    if (!tag) return;
    if (e.key === "Enter") {
      const value = tag.toLocaleUpperCase().trim();
      const exists = tags.find((item) => item === value);

      if (exists) return toast.error("Tag name already in the list");

      setTags((prev) => [...prev, value]);

      setTag("");
    }
  };

  const removeTag = (tagName: string) => {
    setTags((prev) => prev.filter((x) => x !== tagName));
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setSlug(e.target.value.trim());
  };

  const submitHandler = async () => {
    if (
      !title ||
      !slug ||
      !category ||
      !body ||
      !shortDescription ||
      !tags ||
      !tags.length
    ) {
      toast.error("Opps, All fields are required!");
    }

    const data = {
      title,
      shortDescription,
      slug,
      tags,
      category,
      body,
    };

    console.log(data);
  };

  return (
    <Layout>
      <Stack spacing={8}>
        <Flex align="center" justify="space-between">
          <Heading>Create a post</Heading>
          <Flex gap={3}>
            <Button variant="outline" leftIcon={<FaEye />}>
              Preview
            </Button>
            <Button
              onClick={submitHandler}
              rightIcon={<MdConfirmationNumber />}
            >
              Publish
            </Button>
          </Flex>
        </Flex>
        <Flex justify="space-between" gap={3}>
          <Box
            background="whiteAlpha.100"
            borderRadius="md"
            boxShadow="md"
            padding={4}
            flex={3}
          >
            <Stack>
              <Flex gap={3} justify="space-between" align="flex-start">
                <Stack width="50%">
                  <FormControl>
                    <FormLabel>Title*</FormLabel>
                    <Input value={title} onChange={handleTitleChange} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Short description*</FormLabel>
                    <Textarea
                      value={shortDescription}
                      onChange={(e) => setShortDescription(e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Thumbnail*</FormLabel>
                    <Flex
                      justify="center"
                      align="center"
                      width="100%"
                      height="150px"
                      border="1px"
                      borderColor="whiteAlpha.300"
                      borderRadius="md"
                      background="blackAlpha.200"
                      direction="column"
                      cursor="pointer"
                      onClick={() => imageRef.current?.click()}
                    >
                      <Icon fontSize="4xl" color="blue.300" as={MdAddAPhoto} />

                      <Text fontSize="sm">Click to ass an assets</Text>
                    </Flex>
                    <input type="file" hidden ref={imageRef} />
                  </FormControl>
                </Stack>
                <Stack width="50%">
                  <FormControl>
                    <FormLabel>Slug*</FormLabel>
                    <InputGroup>
                      <Input
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                      />
                      <InputRightElement>
                        <IconButton
                          aria-label="regenerate"
                          title="regenerate"
                          icon={<Icon as={MdRefresh} />}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText>
                      unique, not space, not dot fot url
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </Flex>

              <FormControl>
                <FormLabel>Body*</FormLabel>
                <Textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  size="lg"
                  height="300px"
                />
              </FormControl>
            </Stack>
          </Box>

          <Box
            background="whiteAlpha.100"
            borderRadius="md"
            boxShadow="md"
            padding={4}
            flex={1}
            position="sticky"
            right={0}
            height="70%"
            top={0}
          >
            <Stack>
              <Text>RELATIONS</Text>
              <Divider />
              <FormControl>
                <FormLabel>Category*</FormLabel>
                <Select onChange={(e) => setCategory(e.target.value)}>
                  <option value="React">React</option>
                  <option value="Nodejs">Nodejs</option>
                  <option value="Web development">Web development</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Tags*</FormLabel>

                <Input
                  value={tag}
                  onChange={handleTagChangeInput}
                  onKeyDown={handleTagMaking}
                />
                <FormHelperText>Write a text and hit enter</FormHelperText>
              </FormControl>
              <Flex gap={1} flexWrap="wrap">
                {tags.map((t) => (
                  <Tag key={t}>
                    <TagLabel>{t}</TagLabel>
                    <TagCloseButton onClick={() => removeTag(t)} />
                  </Tag>
                ))}
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Layout>
  );
};

export default create;
