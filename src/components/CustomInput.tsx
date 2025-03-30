import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

type CustomInputProps = {
  // custom fields
} & TextInputProps;

const CustomInput = (props : CustomInputProps) => {
  return <TextInput {...props} style={[s.input, props.style ]} />;
};

const s = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: "#CCC",
  },
});

export default CustomInput;
