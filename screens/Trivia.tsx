import * as React from "react";
import { StyleSheet } from "react-native";

// components
import { SafeAreaView } from "react-native-safe-area-context";
import { QuestionsContainer } from "../components/Trivia";

// hooks
import useColorScheme from "../hooks/useColorScheme";

// config
import Colors from "../constants/Colors";

// types
import { ScreenProps } from "../types";

export default function Trivia({ navigation }: ScreenProps<"Trivia">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView
      style={[
        wrapper.wrapper,
        { backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background },
      ]}
    >
      <QuestionsContainer navigation={navigation} />
    </SafeAreaView>
  );
}

const wrapper = StyleSheet.create({
  wrapper: {
    height: "100%",
    flex: 1,
  },
});
