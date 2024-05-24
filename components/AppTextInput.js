import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput = ({ value, onChangeText, ...otherProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        styles.input,
        focused && styles.inputFocused,
      ]}
      value={value}
      onChangeText={onChangeText}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    padding: Spacing * 2,
    backgroundColor: Colors.lightPrimary,
    borderRadius: Spacing,
    marginVertical: Spacing,
  },
  inputFocused: {
    borderWidth: 3,
    borderColor: Colors.primary,
    shadowOffset: { width: 4, height: Spacing },
    shadowColor: Colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: Spacing,
  },
});

export default AppTextInput;


