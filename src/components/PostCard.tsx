import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { formatDistanceToNow } from "date-fns";
import { Post, users } from "../data/mockData";
import { colors } from "../theme/colors";
import { useAuth } from "../context/AuthContext";
import { sharePost } from "../utils/sharing";

interface PostCardProps {
  post: Post;
  onPress: () => void;
  onLike: () => void;
}

export default function PostCard({ post, onPress, onLike }: PostCardProps) {
  const { user } = useAuth();
  const author = users.find((u) => u.id === post.userId);
  const isLiked = user ? post.likes.includes(user.id) : false;

  const handleShare = async () => {
    await sharePost(post);
  };

  return (
    <Pressable onPress={onPress}>
      <Card style={styles.card}>
        <Card.Title
          title={author?.name}
          subtitle={formatDistanceToNow(new Date(post.timestamp), {
            addSuffix: true,
          })}
          left={(props) => (
            <Image source={{ uri: author?.avatar }} style={styles.avatar} />
          )}
        />
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            {post.title}
          </Text>
          <Text variant="bodyMedium" style={styles.category}>
            {post.category}
          </Text>
          <Image source={{ uri: post.image }} style={styles.image} />
          <Text variant="bodyMedium" style={styles.content} numberOfLines={3}>
            {post.content}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            icon={isLiked ? "heart" : "heart-outline"}
            onPress={onLike}
            textColor={isLiked ? colors.error : colors.primary}
          >
            {post.likes.length} Likes
          </Button>
          <Button
            icon="comment"
            onPress={onPress}
            buttonColor={colors.primary}
            textColor={colors.surface}
          >
            {post.comments.length} Comments
          </Button>
          <Button
            icon="share"
            onPress={handleShare}
            buttonColor={colors.primary}
            textColor={colors.surface}
          >
            Share
          </Button>
        </Card.Actions>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: colors.surface,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    marginBottom: 8,
    color: colors.text,
  },
  category: {
    color: colors.textLight,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },
  content: {
    color: colors.text,
  },
});
