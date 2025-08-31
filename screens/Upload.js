import { StyleSheet, Text, Alert, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import ProductForm from "../components/ProductForm";
import * as ImagePicker from "expo-image-picker";
import ProductContext from "../context/ProductContext";
import Header from "../components/Header";

const Upload = () => {
  const [productObject, setProductObject] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { addProduct, productList } = useContext(ProductContext);

  const openImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access media library is required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setProductObject((prev) => ({ ...prev, image: uri }));
    }
  };

  const handleAddProduct = () => {
    if (productList.length >= 5)
      return Alert.alert(
        "Product Limit",
        "Sorry, Can not add more than 5 products. Please delete existing products to proceed"
      );

    if (!productObject.name || !productObject.price || !productObject.image)
      return Alert.alert("Missing Field(s)", "All fields must be filled in");

    addProduct({ ...productObject, id: Date.now().toString() });
    Alert.alert(
      "Product Uploaded",
      `Product ${productObject.name} successfully uploaded`
    );
    setProductObject({ name: "", price: "", image: "" });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Upload Screen"} />
      <ProductForm
        onProductNameChange={(text) =>
          setProductObject((prev) => ({ ...prev, name: text }))
        }
        onProductPriceChange={(price) =>
          setProductObject((prev) => ({ ...prev, price: price }))
        }
        productName={productObject.name}
        productPrice={productObject.price}
        onOpenImageLibrary={openImagePicker}
        onPress={handleAddProduct}
        productImage={productObject.image}
      />
    </SafeAreaView>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
});
