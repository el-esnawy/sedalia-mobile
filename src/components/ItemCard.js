import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ItemCard = (props) => {
  const CardProps = { ...props };
  delete CardProps.id;

  let propsArray = [];

  for (const property in CardProps) {
    propsArray.push(
      <View style={styles.innerContainer} key={Math.random() * 10000}>
        <Text style={styles.title}>{property}</Text>
        <Text>{props[property]} </Text>
      </View>,
    );
  }

  return <TouchableOpacity style={styles.container}>{propsArray.map((item) => item)}</TouchableOpacity>;
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    borderColor: "grey",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
