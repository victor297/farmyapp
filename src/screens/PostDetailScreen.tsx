import React, { useState } from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import {
  Surface,
  Text,
  Button,
  TextInput,
  Avatar,
  Card,
  Divider,
} from "react-native-paper";
import { formatDistanceToNow } from "date-fns";
import { Post, Comment, users } from "../data/mockData";
import { colors } from "../theme/colors";

interface PostDetailScreenProps {
  route: { params: { post: Post } };
}

export default function PostDetailScreen({ route }: PostDetailScreenProps) {
  const { post } = route.params;
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(post.comments);
  const author = users.find((user) => user.id === post.userId);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        userId: users[0].id, // Using first user as current user
        content: newComment,
        timestamp: new Date().toISOString(),
        replies: [],
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const CommentItem = ({ comment }: { comment: Comment }) => {
    const commentAuthor = users.find((user) => user.id === comment.userId);
    return (
      <Card style={styles.commentCard}>
        <Card.Title
          title={commentAuthor?.name}
          subtitle={formatDistanceToNow(new Date(comment.timestamp), {
            addSuffix: true,
          })}
          left={(props) => (
            <Avatar.Image size={40} source={{ uri: commentAuthor?.avatar }} />
          )}
        />
        <Card.Content>
          <Text>{comment.content}</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={{ uri: post.image }} style={styles.image} />
          <Text variant="headlineMedium" style={styles.title}>
            {post.title}
          </Text>
          <View style={styles.authorInfo}>
            <Avatar.Image size={50} source={{ uri: author?.avatar }} />
            <View style={styles.authorText}>
              <Text variant="titleMedium">{author?.name}</Text>
              <Text variant="bodySmall">
                {formatDistanceToNow(new Date(post.timestamp), {
                  addSuffix: true,
                })}
              </Text>
            </View>
          </View>
          <Text variant="bodyLarge" style={styles.content}>
            {post.content}
          </Text>
        </View>

        <Divider style={styles.divider} />

        <Text variant="titleLarge" style={styles.commentsTitle}>
          Comments ({comments.length})
        </Text>

        <View style={styles.commentInput}>
          <TextInput
            mode="outlined"
            value={newComment}
            onChangeText={setNewComment}
            placeholder="Add a comment..."
            multiline
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleAddComment}
            disabled={!newComment.trim()}
            style={styles.commentButton}
          >
            Post
          </Button>
        </View>

        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    color: colors.text,
    marginBottom: 16,
  },
  authorInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  authorText: {
    marginLeft: 12,
  },
  content: {
    color: colors.text,
    lineHeight: 24,
    textAlign: "justify",
  },
  divider: {
    marginVertical: 16,
  },
  commentsTitle: {
    color: colors.text,
    marginBottom: 16,
  },
  commentInput: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.surface,
    marginBottom: 8,
  },
  commentButton: {
    alignSelf: "flex-end",
  },
  commentCard: {
    marginBottom: 12,
    backgroundColor: colors.surface,
  },
});
