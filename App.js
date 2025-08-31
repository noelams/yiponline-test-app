import { StyleSheet } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ProductProvider } from "./context/ProductContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer style={styles.container}>
          <ProductProvider>
            <MainNavigator />
          </ProductProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
