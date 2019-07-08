import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from 'react-native-check-box';
import { TodoItem } from "./TodoItem";

interface TodoListItemProps {
  item: TodoItem;
  onComplete: (id: string) => void;
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { item, onComplete } = props;

  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>
        {item.name}
      </Text>

      <CheckBox
        style={styles.checkBox}
        isChecked={item.isCompleted}
        onClick={() => {
          onComplete(item.id);
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "lightgrey",
    padding: 12,
    marginVertical: 12
  },
  name: {
    marginRight: 6
  },
  checkBox: {}
})