import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from 'react-native-check-box';

export const TodoListItem = props => {
  const { item, onComplete } = props;

  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>
        {item.name}
      </Text>

      <CheckBox
        style={styles.checkBox}
        isChecked={item.isCompleted}
        onClick={state => {
          onComplete(item.id);
        }}
        leftText={item.name}
      />
      
    </View>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired
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