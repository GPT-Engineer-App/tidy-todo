import { Container, VStack, Heading, Input, Button, List, ListItem, Checkbox, IconButton, HStack, Text, Box, Flex, Link } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Add a new todo" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button onClick={addTodo} colorScheme="teal">Add</Button>
        </HStack>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between">
              <HStack>
                <Checkbox 
                  isChecked={todo.completed} 
                  onChange={() => toggleComplete(index)}
                />
                <Text as={todo.completed ? "s" : "span"}>{todo.text}</Text>
              </HStack>
              <IconButton 
                aria-label="Delete todo" 
                icon={<FaTrash />} 
                onClick={() => deleteTodo(index)} 
              />
            </ListItem>
          ))}
        </List>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" py={4} bg="gray.800" color="white" mt={10}>
    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" maxW="container.md" mx="auto" px={4}>
      <Text mb={{ base: 2, md: 0 }}>© {new Date().getFullYear()} Todo App. All rights reserved.</Text>
      <Flex>
        <Link href="/" mx={2}>Home</Link>
        <Link href="/about" mx={2}>About</Link>
        <Link href="/contact" mx={2}>Contact</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Index;