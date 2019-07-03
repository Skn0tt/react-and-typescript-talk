import React from "react";
import PropTypes from 'prop-types';
import { FlatList } from "react-native";
import { TodoListItem } from "./TodoListItem";

export const TodoList = props => {
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

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
}
