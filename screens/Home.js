import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import ConfirmModal from "../components/ConfirmModal";

const Home = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);
  const { productList, removeProduct } = useContext(ProductContext);

  const handleRemove = () => {
    if (selectedProductId) {
      removeProduct(selectedProductId);
      Alert.alert(
        "Product Removed",
        "You have removed a product from your catalogue"
      );
      setSelectedProductId(null);
      setSelectedProductName("");
    }
    setConfirmModalIsVisible(false);
  };


  return (
    <View style={styles.container}>
      <Header title={"Home Screen"} />
      {productList.length > 0 ? (
        <FlatList
          data={productList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              productImage={item.image}
              productName={item.name}
              productPrice={item.price}
              onPress={() => {
                setSelectedProductId(item.id);
                setConfirmModalIsVisible(true);
                setSelectedProductName(item.name);
              }}
            />
          )}
        />
      ) : (
        <Text style={styles.emptyText}>
          No products yet. Upload one on the upload page
        </Text>
      )}
      <ConfirmModal
        visible={confirmModalIsVisible}
        onClose={() => setConfirmModalIsVisible(false)}
        onConfirm={handleRemove}
        message={`Are you sure you want to delete ${selectedProductName}?`}
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 16,
  },
  emptyText: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
});
