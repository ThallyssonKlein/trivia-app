import * as React from "react";
import { View, StyleSheet } from "react-native";

// components
import { SafeAreaView } from "react-native-safe-area-context";

// types
import { ViewStyle } from "react-native";

type BDProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

type ChildProps = BDProps & { style?: ViewStyle };

export function Bottom({ children }: ChildProps) {
  return <View style={[commonStyles.container, { flex: 1 }]}>{children}</View>;
}

export function Center({ children, style }: ChildProps) {
  return <View style={[commonStyles.container, style, { flex: 2 }]}>{children}</View>;
}

export function Top({ children }: ChildProps) {
  return <View style={[commonStyles.container, { flex: 1 }]}>{children}</View>;
}

export function BorderLayout({ children, style }: BDProps) {
  return <SafeAreaView style={[wrapper.wrapper, style]}>{children}</SafeAreaView>;
}

const commonStyles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

const wrapper = StyleSheet.create({
  wrapper: {
    height: "100%",
    flex: 1,
  },
});
