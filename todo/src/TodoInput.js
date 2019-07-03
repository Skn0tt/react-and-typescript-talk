import React from "react";
import PropTypes from "prop-types";
import { TextInput, Button, StyleSheet, View } from "react-native";

export class TodoInput extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    }
  }

  handleAdd = () => {
    const { input } = this.state;
    this.props.onAdd(input);
    this.setState({
      input: ""
    });
  }

  render() {
    const { input } = this.state;

    const isValidInput = !!input.trim();

    return (
      <View style={styles.container}>

        <TextInput
          value={input}
          placeholder="Name"
          onChangeText={newText => {
            this.setState({ input: newText });
          }}
          style={styles.input}
        />

        <Button
          title="Add"
          onPress={this.handleAdd}
          disabled={!isValidInput}
          style={styles.button}
        />

      </View>
    );
  }
}

TodoInput.propTypes = {
  onAdd: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    fontSize: 24
  },
  button: {
    fontSize: 24
  }
})