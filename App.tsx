import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/Index";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Index />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
