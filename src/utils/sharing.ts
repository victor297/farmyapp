import * as Sharing from 'expo-sharing';
import { Post } from '../data/mockData';

export async function sharePost(post: Post) {
  try {
    const message = `Check out this post on FarmerConnect!\n\n${post.title}\n\n${post.content}\n\nShared via FarmerConnect App`;
    await Sharing.shareAsync(post.image, {
      mimeType: 'image/jpeg',
      dialogTitle: post.title,
      UTI: 'public.jpeg',
    });
  } catch (error) {
    console.error('Error sharing post:', error);
  }
}