import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
    alignSelf: "center",
  },
});
