import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getItemRequests } from "../store/asyncThunk/requestThunk";

const ItemRequests = () => {
  const dispatch = useDispatch();
  const { requests, loading } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItemRequests());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text>Item Request</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ItemRequests;
