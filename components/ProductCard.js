import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ProductCard = ({
  productName,
  productImage,
  productPrice,
  id,
  onPress,
}) => {
  return (
    <View style={styles.container} id={id}>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.productPrice}>₦{productPrice}</Text>
      <Image source={{ uri: productImage }} style={styles.productImage} />
      <Pressable onPress={onPress} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>delete</Text>
      </Pressable>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 4,
    borderTopColor: "#020250",
    borderRadius: 7,
    width: "80%",
    height: 220,
    elevation: 2,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginVertical: 10,
    padding: 12,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
    marginBottom: 8,
  },
  deleteButton: {
    marginTop: 5,
    padding: 8,
    backgroundColor: "#020250",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
