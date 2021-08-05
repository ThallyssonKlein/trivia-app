import React, { useContext } from "react";

import { QAContext } from "../../contexts/QAContext"; 

import Answer from "./Answer";

type Props = {
    route: any
}

export default function AnswersContainer({ route }: Props){
    const { correctAnswers, titles } = useContext(QAContext);

    console.log(correctAnswers);
    console.log(route?.params.userAnswers);
    return <>
                {
                    correctAnswers.map((answer, index) => {
                        return <Answer isCorrect={route?.params.userAnswers[index][index + 1 + ""] === !!answer}
                                       key={index}
                                       text={titles[index]}/>
                    })  
                }
            </>
}