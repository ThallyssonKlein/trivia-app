import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ScreenProps } from "../types";

// components
import { BorderLayout, Top, Center, Bottom } from "../constants/Layout";

// config
import Colors from "../constants/Colors";

function Accordion() {
  return <View></View>;
}

export default function Results({ route }: ScreenProps<"Results">) {
  return (
    <BorderLayout style={{ backgroundColor: Colors.dark.background }}>
      <Center>
        <ScrollView>{route?.params.userAnswers.map((answer) => console.log(answer))}</ScrollView>
      </Center>
    </BorderLayout>
  );
}

const styles = StyleSheet.create({});
