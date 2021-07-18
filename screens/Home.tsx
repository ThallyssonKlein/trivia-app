import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";

// config
import Colors from "../constants/Colors";

// hooks
import useColorScheme from "../hooks/useColorScheme";

// types
import { ScreenProps } from "../types";

function Footer({ navigation }: ScreenProps<"Home">) {
  return (
    <View style={footerStyles.container}>
      <Button title="Begin" onPress={() => navigation.navigate("Trivia")} />
    </View>
  );
}

function Content() {
  const colorScheme = useColorScheme();

  return (
    <View style={contentStyles.container}>
      <Text style={[contentStyles.text, { color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text }]}>
        You will be presented with 10 True or False questions.
      </Text>
      <Text style={[contentStyles.text, { color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text }]}>
        Can you score 100%?
      </Text>
    </View>
  );
}

function Header() {
  const colorScheme = useColorScheme();

  return (
    <View style={headerStyles.container}>
      <Text style={[headerStyles.text, { color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text }]}>
        Welcome to the Trivia Challenge!
      </Text>
    </View>
  );
}

export default function Home({ navigation }: ScreenProps<"Home">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView
      style={[
        wrapper.wrapper,
        { backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background },
      ]}
    >
      <Header />
      <Content />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const wrapper = StyleSheet.create({
  wrapper: {
    height: "100%",
    flex: 1,
  },
});

const commonStyles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

const footerStyles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
  },
});

const contentStyles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 2,
  },
  text: {
    textAlign: "center",
    fontSize: 22,
  },
});

const headerStyles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: 250,
  },
});
