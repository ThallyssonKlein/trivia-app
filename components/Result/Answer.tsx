import * as React from "react";
import { View, Text } from "react-native";

type Props = {
    text: string | undefined;
    isCorrect: boolean | undefined;
}

export default function Answer({text, isCorrect} : Props){
    return <View style={{flexDirection: "row"}}>
                {(isCorrect) ? <Text>+{text}</Text> : <Text>-{text}</Text>}
           </View>
}