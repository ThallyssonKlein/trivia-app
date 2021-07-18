import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import Button from "../common/Button";

// config
import Colors from "../../constants/Colors";

// contexts
import { QAContext } from "../../contexts/QAContext";
import { Answer } from "../../types";

type Props = {
  setNextButtonDisplay: (value: boolean) => void;
};

export default function QuestionCard({ setNextButtonDisplay }: Props) {
  const { questions, totalQuestions, currentQuestion, userAnswers, setUserAnswers } = React.useContext(QAContext);
  const [currentPressed, setCurrentPressed] = React.useState({ buttonTrue: false, buttonFalse: false });

  React.useEffect(() => {
    setNextButtonDisplay(false);
    setCurrentPressed({ buttonTrue: false, buttonFalse: false });
  }, [currentQuestion]);

  return (
    <View style={styles.container}>
      <View style={styles.questionProgressContainer}>
        <Text style={styles.questionProgressText}>Question {currentQuestion + 1}</Text>
        <Text style={[styles.questionProgressText, { fontSize: 18 }]}> / {totalQuestions}</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questions[currentQuestion]?.question}</Text>
      </View>
      <View style={styles.choices}>
        <Button
          title="False"
          onPress={() => {
            setCurrentPressed({ buttonTrue: false, buttonFalse: true });
            setNextButtonDisplay(true);
            setUserAnswers([...userAnswers, { [currentQuestion + 1]: false }]);
          }}
          customStyle={{
            button: { ...styles.button },
            pressedButton: currentPressed.buttonFalse ? { borderColor: Colors.dark.timer.backgroundColor.to } : {},
          }}
        />
        <Button
          title="True"
          onPress={() => {
            setCurrentPressed({ buttonTrue: true, buttonFalse: false });
            setNextButtonDisplay(true);
            setUserAnswers([...userAnswers, { [currentQuestion + 1]: true }]);
          }}
          customStyle={{
            button: { ...styles.button },
            pressedButton: currentPressed.buttonTrue ? { borderColor: Colors.dark.timer.backgroundColor.to } : {},
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
  },
  questionProgressContainer: {
    flexDirection: "row",
    borderBottomColor: Colors.dark.grayedOutText,
    borderBottomWidth: 2,
    alignSelf: "flex-start",
  },
  questionProgressText: {
    color: Colors.dark.grayedOutText,
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  questionContainer: {
    marginBottom: 20,
    alignContent: "flex-end",
  },
  questionText: {
    color: Colors.dark.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  choices: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: Colors.dark.input.background,
    borderColor: Colors.dark.input.border,
    borderWidth: 5,
    borderStyle: "solid",
  },
});
