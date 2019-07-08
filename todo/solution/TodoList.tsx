import React from "react";
import PropTypes from 'prop-types';
import { FlatList } from "react-native";
import { TodoListItem } from "./TodoListItem";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  items: TodoItem[];
  onComplete: (id: string) => void;
}

export const TodoList = (props: TodoListProps) => {
  const { items, onComplete } = props;

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={
        info => <TodoListItem item={info.item} onComplete={onComplete} />
      }
    />
  );
}
