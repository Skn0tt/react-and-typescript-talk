import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import uuid from "uuid";

const generateRandomID = () => uuid.v4(); 

const initialTodoItems = [
  {
    id: generateRandomID(),
    name: "Finish Demo App",
    isCompleted: true,
  },
  {
    id: generateRandomID(),
    name: "Migrate it to TypeScript",
    isCompleted: false
  }
]

export const App = () => {
  const [ todoItems, setTodoItems ] = React.useState(initialTodoItems);

  const handleAdd = React.useCallback(
    (name) => {
      const id = generateRandomID();
      const newTodoItem = {
        id,
        name,
        isCompleted: false
      }

      setTodoItems(items => {
        return items.concat(newTodoItem)
      });
    },
    [setTodoItems]
  );

  const handleComplete = React.useCallback(
    (idToComplete) => {
      setTodoItems(items => {
        return items.map(item => {
          const { id } = item;
          if (id !== idToComplete) {
            return item;
          }

          return {
            ...item,
            isCompleted: true
          };
        });
      });
    },
    [setTodoItems]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your ToDos:</Text>
      <TodoList
        items={todoItems}
        onComplete={handleComplete}
      />
      <TodoInput onAdd={handleAdd} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: "center",
    width: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  }
});