import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    borderColor: "black",
    padding: 18,
    margin: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3
  },
  cardContent: {},
});

export default Card;
