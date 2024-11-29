import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Surface, Text, Title } from "react-native-paper";
import { users } from "../data/mockData";
import { colors } from "../theme/colors";

export default function ProfileScreen() {
  const currentUser = users[0]; // For demo, using first user

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={80} source={{ uri: currentUser.avatar }} />
        <Title style={styles.name}>{currentUser.name}</Title>
        <Text style={styles.bio}>{currentUser.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  name: {
    marginTop: 10,
    color: colors.text,
  },
  bio: {
    marginTop: 5,
    color: colors.textLight,
    textAlign: "center",
  },
});
