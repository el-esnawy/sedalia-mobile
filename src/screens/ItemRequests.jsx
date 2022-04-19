import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const ItemRequests = () => {
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
