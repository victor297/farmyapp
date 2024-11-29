import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Surface, TextInput, Button } from "react-native-paper";
import { colors } from "../theme/colors";
import { posts } from "../data/mockData";

export default function CreatePostScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    const newPost = {
      id: Date.now().toString(),
      userId: "1", // Using first user as current user
      title,
      content,
      category,
      image:
        "https://www.agrivi.com/wp-content/uploads/2021/05/Vegetable-Farming-From-its-Beginnings-1200x565.jpeg",
      likes: ["2"],
      timestamp: new Date().toISOString(),
      comments: [],
    };

    posts.unshift(newPost);
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Category"
        value={category}
        onChangeText={setCategory}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Content"
        value={content}
        onChangeText={setContent}
        mode="outlined"
        multiline={true}
        numberOfLines={10}
        style={{
          height: 170,
          textAlignVertical: "top",
          marginBottom: 16,
          backgroundColor: colors.surface,
        }}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        buttonColor={colors.primary}
        disabled={!title || !content || !category}
      >
        Create Post
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  input: {
    marginBottom: 16,
    backgroundColor: colors.surface,
  },
  button: {
    marginTop: 8,
    color: "#2E7D32",
    backgroundColor: "#2E7D32",
  },
});
