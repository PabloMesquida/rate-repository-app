import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab.jsx";
import theme from "../theme.js";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
  },
  scroll: { paddingBottom: 15 },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
