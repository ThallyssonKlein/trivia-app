// types
import { Question } from "../types";

export default function titles(questions: Question[]) {
  return questions.map((question) => question.question);
}
