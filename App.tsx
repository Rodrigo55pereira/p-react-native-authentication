import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Login</Text>
      <TextInput placeholder="Email" style={s.input} />
      <TextInput placeholder="Senha" style={s.input} secureTextEntry />
      <Pressable
        onPress={() => {
          console.log("pressed");
        }}
        style={s.button}
      >
        <Text style={s.buttonText}>Entrar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
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
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: "#CCC",
  },
  button: {
    backgroundColor: "#4353FD",
    padding: 15,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  }
});
