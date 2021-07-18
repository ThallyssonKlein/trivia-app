const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    grayedOutText: "#7C83AA",
    background: "#242B40",
    input: {
      border: "#20486A",
      background: "#243151",
    },
    button: {
      background: "#117EEB",
      pressed: {
        background: "",
      },
    },
    timer: {
      borderColor: "#7C83AA",
      backgroundColor: {
        from: "#B56FF9",
        to: "#FC5069",
      },
    },
    tint: tintColorDark,
  },
};
