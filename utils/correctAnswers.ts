// types
import { Question } from "../types";

export default function correctAnswers(questions: Question[]) {
  return questions.map((question) => question.correct_answer);
}
