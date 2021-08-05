import React, { useContext } from "react";
import { ScrollView } from "react-native";

import { QAContext } from "../../contexts/QAContext"; 

import Answer from "./Answer";

type Props = {
    route: any
}

export default function AnswersContainer({ route }: Props){
    const { correctAnswers, titles } = useContext(QAContext);

    return <ScrollView>
                {
                    correctAnswers.map((answer, index) => {
                        return <Answer isCorrect={route?.params.userAnswers[index][index + 1 + ""] === !!answer}
                                       key={index}
                                       text={titles[index]}/>
                    })  
                }
            </ScrollView>
}