import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, List, ListItem, Textarea, VStack, Text, Heading, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [urlInput, setUrlInput] = useState("");
  const [errors, setErrors] = useState([]);
  const toast = useToast();

  const handleInputChange = (event) => {
    setUrlInput(event.target.value);
  };

  const analyzeSite = async () => {
    // This function would typically call an API or run some checks to determine the errors
    // For the sake of this example, we'll just return some placeholder errors.
    // In a real-world application, you would replace this with actual logic.

    if (!urlInput) {
      toast({
        title: "Error",
        description: "Please enter a URL to analyze.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Placeholder errors
    const placeholderErrors = ["Error 404: Page not found", "Error 500: Internal Server Error", "Missing <title> tag", "No meta description found", "Images missing alt attributes"];

    setErrors(placeholderErrors);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Site Error Analyzer
        </Heading>
        <FormControl id="url">
          <FormLabel>Website URL</FormLabel>
          <Input type="url" placeholder="Enter website URL" value={urlInput} onChange={handleInputChange} />
        </FormControl>
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={analyzeSite}>
          Analyze
        </Button>
        {errors.length > 0 && (
          <Box w="100%">
            <Text mb={4} fontSize="lg" fontWeight="bold">
              Errors Found:
            </Text>
            <List spacing={3}>
              {errors.map((error, index) => (
                <ListItem key={index} p={3} bg="red.100" borderRadius="md">
                  {error}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
