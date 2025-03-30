import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type CustomButton = {
  // onPress: () => void;
  text: string;
} & PressableProps;

const CustomButton = ({ text, ...props }: CustomButton) => {
  return (
    <Pressable {...props} style={s.button}>
      <Text style={s.buttonText}>{text}</Text>
    </Pressable>
  );
};

const s = StyleSheet.create({
  button: {
    backgroundColor: "#0a0b19",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CustomButton;
