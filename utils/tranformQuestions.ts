// types
import { Question } from "../types";

export default function tranformQuestions(questions: Question[]) {
  const addId = (question: Question, index: number) => {
    question.id = index + 1;
    return question;
  };
  const changeCorrectAnswerCase = (question: Question) => {
    question.correct_answer = question.correct_answer.toLowerCase();
    return question;
  };
  const changeIncorrectAnswerDataType = (question: Question) => {
    const incorrectAnswer = question.incorrect_answers[0].toLowerCase();
    question.incorrect_answers = incorrectAnswer;
    return question;
  };
  const addQuestionMarkToEndOfTheSentence = (question: Question) => {
    question.question = question.question.replace(/\.$/g, "?");
    return question;
  };
  const replaceHtmlEntities = (question: Question) => {
    const htmlEntities = {
      "&quot;": '"',
      "&ldquo;": '"',
      "&rdquo;": '"',
      "&#039;": "'",
    };
    const htmlEntitiesKeys = Object.keys(htmlEntities);
    const regex = new RegExp(`${[...htmlEntitiesKeys].join("|")}`, "gi");

    question.question = question.question.replace(regex, (match) => {
      switch (match) {
        case "&quot;":
        case "&ldquo;":
        case "&rdquo;":
          return htmlEntities["&quot;"];
        case "&#039;":
          return htmlEntities["&#039;"];
        default:
          return "";
      }
    });

    return question;
  };

  return questions
    .map(addId)
    .map(changeCorrectAnswerCase)
    .map(changeIncorrectAnswerDataType)
    .map(addQuestionMarkToEndOfTheSentence)
    .map(replaceHtmlEntities);
}
