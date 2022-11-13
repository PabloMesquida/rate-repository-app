import React from "react";
import { StyleSheet } from "react-native";
import { Link, useLocation } from "react-router-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme.js";

const styles = StyleSheet.create({
  text: { paddingHorizontal: 10, color: theme.appBar.secondaryText },
  active: { color: theme.appBar.primaryText },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

export default AppBarTab;
