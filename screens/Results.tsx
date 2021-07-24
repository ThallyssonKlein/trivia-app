import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ScreenProps } from "../types";

// components
import { BorderLayout, Center } from "../constants/Layout";

// config
import Colors from "../constants/Colors";

import { QAContext } from "../contexts/QAContext";

import AnswersContainer from "../components/Result/AnswersContainer";

import { QAContextProvider } from "../contexts/QAContext";
export default function Results({ route }: ScreenProps<"Results">) {

  return (
    <BorderLayout style={{ backgroundColor: Colors.light.background }}>
      <Center>
           <QAContextProvider>
              <AnswersContainer route={route}/>
           </QAContextProvider>
      </Center>
    </BorderLayout>
  );
}