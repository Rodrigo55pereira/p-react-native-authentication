import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomInput from "./src/components/CustomInput";
import CustomButton from "./src/components/CustomButton";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={s.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={s.title}>Login</Text>

      <CustomInput
        placeholder="Email"
        autoFocus
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
      />
      <CustomInput placeholder="Senha" secureTextEntry />
      <CustomButton
        text="Entrar"
        onPress={() => {
          console.log("pressed");
        }}
      />

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
  },
});
