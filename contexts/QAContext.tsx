import * as React from "react";

// types
import { TransformedQuestions, Question, ApiResponse, Answer } from "../types";

// config
import apiEndpoints from "../constants/API/endpoints";
import { transformQuestions, correctAnswers as _correctAnswers, titles as _titles} from "../utils";

type ContextTypes = {
  questions: TransformedQuestions;
  totalQuestions: number;
  currentQuestion: number;
  setCurrentQuestion: (value: number) => void;
  correctAnswers: string[];
  userAnswers: Answer[];
  setUserAnswers: (answer: Answer[]) => void;
  titles: string[];
  setTitles: (value: string[]) => void;
};

export const QAContext = React.createContext<ContextTypes>({
  questions: [],
  totalQuestions: 0,
  currentQuestion: 1,
  setCurrentQuestion() {},
  correctAnswers: [],
  userAnswers: [],
  setUserAnswers() {},
  titles: [],
  setTitles() {}
});

type Props = {
  children: React.ReactNode;
};

export function QAContextProvider({ children }: Props) {
  const [questions, setQuestions] = React.useState<TransformedQuestions>([]);
  const [totalQuestions, setTotalQuestions] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState<string[]>([]);
  const [userAnswers, setUserAnswers] = React.useState<Answer[]>([]);
  const [titles, setTitles] = React.useState<string[]>([]);

  React.useEffect(() => {
    async function fetchQuestions() {
      const response: ApiResponse = await (await fetch(apiEndpoints.questions)).json();

      const questions = transformQuestions(response.results);
      const correctAnswers = _correctAnswers(response.results);
      const titles = _titles(response.results);

      setQuestions(questions);
      setTotalQuestions(questions.length);
      setCorrectAnswers(correctAnswers);
      setTitles(titles);
    }

    fetchQuestions();
  }, []);
  
  return (
    <QAContext.Provider
      value={{
        questions,
        totalQuestions,
        setCurrentQuestion,
        currentQuestion,
        correctAnswers,
        userAnswers,
        setUserAnswers,
        titles,
        setTitles
      }}
    >
      {children}
    </QAContext.Provider>
  );
}
