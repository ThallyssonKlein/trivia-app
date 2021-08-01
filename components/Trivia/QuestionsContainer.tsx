import * as React from "react";
import { View, StyleSheet } from "react-native";

// components
import Button from "../common/Button";
import { BorderLayout, Top, Center, Bottom } from "../../constants/Layout";
import ProgressTrack from "./ProgressTrack";
import QuestionCard from "./QuestionCard";

// types
import { RootStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";

// contexts
import { QAContext } from "../../contexts/QAContext";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Trivia">;
};

export default function QuestionsContainer({ navigation }: Props) {
  const { totalQuestions, setCurrentQuestion, currentQuestion, userAnswers } =
    React.useContext(QAContext);
  const [nextButtonDisplay, setNextButtonDisplay] = React.useState(false);
  const [showResultsButtonDisplay, setShowResultsButtonDisplay] = React.useState(false);

  function handleQuestions() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setNextButtonDisplay(!nextButtonDisplay);
      setShowResultsButtonDisplay(!showResultsButtonDisplay);
    }
  }

  return (
    <BorderLayout>
      <Top>
        <View style={contentStyles.progressTrackContainer}>
          <ProgressTrack />
        </View>
      </Top>
      <Center>
        <QuestionCard setNextButtonDisplay={setNextButtonDisplay} />
      </Center>
      <Bottom>
        {(nextButtonDisplay && !showResultsButtonDisplay) && <Button title="Confirm" onPress={handleQuestions} />}
        {showResultsButtonDisplay && (
          <Button
            title="Show results"
            // the route.params in react navigation only accepts serialized types
            // (e.g object literals, string, numbers, etc), and Map() is not a serialized object
            // https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
            onPress={() => navigation.navigate("Results", { userAnswers })}
          />
        )}
      </Bottom>
    </BorderLayout>
  );
}

const contentStyles = StyleSheet.create({
  progressTrackContainer: {
    width: "100%",
  },
});
