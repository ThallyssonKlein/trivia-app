import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ScreenProps } from "../types";

// components
import { BorderLayout, Center, Top } from "../constants/Layout";

// config
import Colors from "../constants/Colors";

import AnswersContainer from "../components/Result/AnswersContainer";

import { QAContext } from "../contexts/QAContext";

export default function Results({ route }: ScreenProps<"Results">) {
  const { correctAnswers, userAnswers } = useContext(QAContext);
  const [ score, setScore ] = useState(0);

  console.log("------");
  console.log(correctAnswers);
  console.log("------");

  useEffect(() => {
      let score = 0;
      correctAnswers.forEach((answer, index) => {
          if(route?.params.userAnswers[index][index + 1 + ""] === !!answer){
              score++;
          }
      });
      setScore(score);
  });
  
  return (
    <BorderLayout style={{ backgroundColor: Colors.light.background }}>
      <Top>
        <Text>You scored {score}/10</Text>
      </Top>
      <Center>
        <AnswersContainer route={route}/>
      </Center>
    </BorderLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.light.text,
    fontSize: 30,
    fontWeight: "bold",
  }
});