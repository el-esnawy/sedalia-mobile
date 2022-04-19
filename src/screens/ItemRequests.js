import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import Colors from "../constants/color";
import { getItemRequests } from "../store/asyncThunk/requestThunk";

const ItemRequests = () => {
  const dispatch = useDispatch();
  const { requests, loading } = useSelector((state) => state.items);
  console.log(requests);
  useEffect(() => {
    dispatch(getItemRequests());
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator color={Colors.primary} />}
      <View style={styles.innerContainer}>
        {!loading &&
          requests.map((item) => (
            <ItemCard key={item._id} brand={item.brand} id={item._id} name={item.name} SKU={item.pharmacySKU} />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
});

export default ItemRequests;
