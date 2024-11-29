import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";
import PostCard from "../components/PostCard";
import { posts } from "../data/mockData";
import { colors } from "../theme/colors";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
  const { user } = useAuth();

  const handlePostPress = (post) => {
    navigation.navigate("PostDetail", { post });
  };

  const handleLike = (postId: string) => {
    if (!user) return;

    const post = posts.find((p) => p.id === postId);
    if (!post) return;

    const likeIndex = post.likes.indexOf(user.id);
    if (likeIndex === -1) {
      post.likes.push(user.id);
    } else {
      post.likes.splice(likeIndex, 1);
    }
  };

  return (
    <Surface style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => handlePostPress(item)}
            onLike={() => handleLike(item.id)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    padding: 16,
  },
});
