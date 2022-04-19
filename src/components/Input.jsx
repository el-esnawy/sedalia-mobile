import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = (props) => {
  const [initalFocus, seTinitalFocus] = useState(false);
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={props.value}
        onChangeText={props.textChangeHandler}
        onBlur={() => {
          seTinitalFocus(true);
        }}
      />
      {!props.isValid && initalFocus && <Text>{props.errorText}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
    marginVertical: 5,
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
