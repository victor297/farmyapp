export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  password: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  image: string;
  category: string;
  timestamp: string;
  comments: Comment[];
  likes: string[]; // Array of user IDs who liked the post
}

export const users: User[] = [
  {
    id: "1",
    name: "David Victor",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Organic farmer with 15 years of experience",
    email: "victor@farmyapp.com",
    password: "victor"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Sustainable agriculture enthusiast",
    email: "sarah@example.com",
    password: "password123"
  }
];

export const posts: Post[] = [
  {
    id: "1",
    userId: "1",
    title: "Sustainable Farming Practices",
    content: "Here are some tips for sustainable farming that I've learned over the years...",
    image: "https://t3.ftcdn.net/jpg/06/33/51/26/360_F_633512661_JXqi0g5viMdmdyy7V9jeyDd0eOyzJdMY.jpg",
    category: "Sustainable Farming",
    timestamp: "2024-11-25T10:00:00Z",
    likes: ["2"],
    comments: [
      {
        id: "1",
        userId: "2",
        content: "Great insights! How do you handle pest control?",
        timestamp: "2024-11-25T11:00:00Z",
        replies: [
          {
            id: "1",
            userId: "1",
            content: "I use natural predators and companion planting",
            timestamp: "2024-11-25T11:30:00Z"
          }
        ]
      },
      {
        id: "2",
        userId: "1",
        content: "Pest control in farming involves a combination of strategies to manage and minimize pest damage while protecting crops and the environment. Integrated Pest Management (IPM) is a key approach, combining preventive measures like crop rotation, healthy soil practices, and pest-resistant varieties with monitoring to identify issues early. Biological methods, such as using beneficial insects and microbial pesticides like Bacillus thuringiensis, can naturally reduce pest populations. Physical barriers like nets and row covers, along with traps, help block or capture pests. Mechanical methods, such as manual removal or tillage, can disrupt pest habitats. When necessary, targeted chemical pesticides are used sparingly to avoid resistance and protect beneficial organisms. Additionally, digital tools and sensors can monitor pest activity and environmental conditions, enabling timely interventions for effective pest management.",
        timestamp: "2024-11-25T11:00:00Z",
        replies: [
          {
            id: "1",
            userId: "1",
            content: "I use natural predators and companion planting",
            timestamp: "2024-11-25T11:30:00Z"
          }
        ]
      },
    ]
  },
  {
    id: "2",
    userId: "2",
    title: "Modern Irrigation Techniques",
    content: "Let's discuss the latest irrigation methods that save water...",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
    category: "Technology",
    timestamp: "2024-01-19T15:00:00Z",
    likes: ["1"],
    comments: []
  }
];