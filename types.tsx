import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

// react-navigation
export type RootStackParamList = {
  Home: undefined;
  Trivia: undefined;
  Results: { userAnswers: Answer[] };
};

export type ScreenProps<N extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, N>;
  route?: RouteProp<RootStackParamList, N>;
};

// app related
export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string] | string;
  id?: number;
};

export type ApiResponse = {
  response_code: number;
  results: Question[];
};

export type TransformedQuestions = Question[];

export type Answer = {
  [key: number]: boolean;
};
