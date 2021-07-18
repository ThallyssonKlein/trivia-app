import * as React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

// types
import { ViewStyle } from "react-native";

type Props = {
  title: string;
  onPress: (value?: unknown) => void;
  customStyle?: {
    button?: ViewStyle;
    pressedButton?: ViewStyle;
  };
};

export default function Button({ title, onPress, customStyle }: Props) {
  function handlePress() {
    onPress();
  }

  return (
    <TouchableHighlight
      onPress={handlePress}
      style={[
        styles.button,
        customStyle?.button ? customStyle.button : {},
        customStyle?.pressedButton ? customStyle.pressedButton : {},
      ]}
      underlayColor={Colors.dark.input.border}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: Colors.dark.button.background,
    padding: 20,
    width: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.dark.text,
  },
});
