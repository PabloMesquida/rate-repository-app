import React from "react";
import { View, StyleSheet, Image } from "react-native";
import RepositoryStats from "./RepositoryStats.jsx";
import RepositoryItemHead from "./RepositoryItemHead.jsx";

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHead {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 5 },
});

export default RepositoryItem;
