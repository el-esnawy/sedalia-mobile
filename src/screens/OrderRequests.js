import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import Colors from "../constants/color";
import { getAllOrders } from "../store/asyncThunk/orderThunk";

const OrderRequests = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator color={Colors.primary} />}
      <View style={styles.innerContainer}>
        {!loading &&
          orders.map((item) => (
            <ItemCard
              status={item.status}
              key={item._id}
              friendlyId={item.friendlyId}
              paymentToCompany={item.paymentSentToCompany.toFixed(2)}
            />
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

export default OrderRequests;
