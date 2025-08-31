import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import React from "react";

const ProductForm = ({
  productName,
  onProductNameChange,
  productPrice,
  onProductPriceChange,
  onPress,
  disabled,
  onOpenImageLibrary,
  productImage,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <TextInput
              placeholder={"Product Name"}
              value={productName}
              style={styles.productName}
              onChangeText={onProductNameChange}
            />
            <View style={styles.priceInputContainer}>
              <Text>₦</Text>
              <TextInput
                placeholder={"Price"}
                value={productPrice}
                style={styles.productPrice}
                onChangeText={onProductPriceChange}
                keyboardType="numeric"
              />
            </View>
            <Pressable
              onPress={onOpenImageLibrary}
              style={({ pressed }) => [
                styles.uploadImageButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>Upload Image</Text>
            </Pressable>
            {productImage ? (
              <Image
                source={{ uri: productImage }}
                style={styles.previewImage}
              />
            ) : null}
            <Pressable
              disabled={disabled}
              onPress={onPress}
              style={({ pressed }) => [
                styles.addProductButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>Add Product</Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  productName: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  priceInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  productPrice: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  uploadImageButton: {
    padding: 12,
    backgroundColor: "#555",
    borderRadius: 6,
    marginVertical: 10,
    alignItems: "center",
  },
  previewImage: {
    width: 120,
    height: 120,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "center",
  },
  addProductButton: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: "#020250",
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  buttonPressed: {
    opacity: 0.85,
  },
});
