import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

// components
import { LinearGradient } from "expo-linear-gradient";

// contexts
import { QAContext } from "../../contexts/QAContext"

// config
import Colors from "../../constants/Colors";

export default function ProgressTrack() {
  const { currentQuestion } = React.useContext(QAContext);
  const [timer, setTimer] = React.useState(30);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, currentQuestion]);

  return (
    <LinearGradient
      colors={[Colors.dark.timer.backgroundColor.from, Colors.dark.timer.backgroundColor.to]}
      start={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.timerText}>{timer}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    borderWidth: 4,
    borderColor: Colors.dark.grayedOutText,
    justifyContent: "center",
  },
  timerText: {
    textAlign: "center",
    color: Colors.dark.text,
    fontSize: 20,
  },
});
