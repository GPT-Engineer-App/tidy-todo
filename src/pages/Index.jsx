import { Container, VStack, Heading, Input, Button, List, ListItem, Checkbox, IconButton, HStack, Text } from "@chakra-ui/react";
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
    </Container>
  );
};

export default Index;