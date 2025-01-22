import './App.css';
import React, { useState } from 'react';
import { Heading, Button, Card, Flex, TextField, Checkbox, Container, Text, TabNav } from "@radix-ui/themes";
import { PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons"


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
      console.log("todos ", todos)
    };
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ))
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <div className='app-container'>
      <TabNav.Root size="2" justify="end" color="pink">
        <TabNav.Link href="#" active>
          Account
        </TabNav.Link>
        <TabNav.Link href="#">Documents</TabNav.Link>
        <TabNav.Link href="#">Settings</TabNav.Link>
      </TabNav.Root>
      <Container maxWidth="400px" align="center">

        <Flex gap="3" align="center" mb="4">
          <Heading size="9" weight="medium" mb="4" mt="6" color='pink'>
            Todo List
          </Heading>
        </Flex>
        <Flex gap="3" align="center" mb="4" >
          <TextField.Root size="3" placeholder="Add a new todo" value={newTodoText} onChange={handleInputChange}>
            <TextField.Slot>
            </TextField.Slot>
          </TextField.Root>
          <Button color="blue" variant="solid" onClick={addTodo} size="3">
            <PlusCircledIcon></PlusCircledIcon>
          </Button>
        </Flex>

        <Flex direction="column" gap="3">
          {todos.map((todo) => (
            <Card key={todo.id} size="1" mb="2" >
              <Flex align="center" gap="3" justify="between"  >
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <Text
                  size="3"
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? "var(--gray-11)" : "var(--gray-12)",
                  }}
                >
                  {todo.text}
                </Text>
                <Button variant="solid" color="red" size="2" onClick={() => deleteTodo(todo.id)}>
                  <TrashIcon></TrashIcon>Delete
                </Button>
              </Flex>

            </Card>
          ))}
        </Flex>

        {todos.length === 0 && (
          <Text mt="4" size="3" color="gray">
            No todos yet. Add one!
          </Text>
        )}
      </Container>
    </div>

  );
};



export default TodoList;
