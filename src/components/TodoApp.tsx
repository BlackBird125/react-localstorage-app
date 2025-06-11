import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../types/todo";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const newTodoItem: Todo = {
      id: Date.now().toString(),
      text: newTodo.trim(),
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Todoリスト
        </Typography>

        <form onSubmit={handleAddTodo}>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField
              fullWidth
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="新しいタスクを入力"
              variant="outlined"
              size="small"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!newTodo.trim()}
            >
              追加
            </Button>
          </Box>
        </form>

        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemText primary={todo.text} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};
