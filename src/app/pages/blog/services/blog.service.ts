import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Customer Experience Management',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses interact with their customers.',
      date: 'Dec 3, 2023',
      category: 'AI & ML',
      image: 'https://source.unsplash.com/random/800x600?ai',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Building Effective Customer Journey Maps',
      excerpt: 'Learn the essential steps to create customer journey maps that drive meaningful insights.',
      date: 'Dec 1, 2023',
      category: 'Best Practices',
      image: 'https://source.unsplash.com/random/800x600?journey',
      readTime: '4 min'
    },
    {
      id: 3,
      title: 'Leveraging Predictive Analytics for Better CX',
      excerpt: 'How predictive analytics can help you stay ahead of customer needs and expectations.',
      date: 'Nov 28, 2023',
      category: 'Analytics',
      image: 'https://source.unsplash.com/random/800x600?data',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'The Role of Emotion AI in Customer Service',
      excerpt: 'Understanding how emotional intelligence in AI can transform customer interactions.',
      date: 'Nov 25, 2023',
      category: 'AI & ML',
      image: 'https://source.unsplash.com/random/800x600?emotion',
      readTime: '5 min'
    },
    {
      id: 5,
      title: 'Optimizing Customer Touchpoints',
      excerpt: 'Strategic approaches to enhance every interaction in the customer journey.',
      date: 'Nov 22, 2023',
      category: 'Customer Experience',
      image: 'https://source.unsplash.com/random/800x600?experience',
      readTime: '4 min'
    },
    {
      id: 6,
      title: 'Data-Driven Decision Making in CX',
      excerpt: 'How to use data analytics to make informed decisions about customer experience.',
      date: 'Nov 20, 2023',
      category: 'Analytics',
      image: 'https://source.unsplash.com/random/800x600?analytics',
      readTime: '7 min'
    }
  ];

  getCategories(): string[] {
    const categories = new Set(this.blogPosts.map(post => post.category));
    return ['All', ...Array.from(categories)];
  }

  getPosts(category: string = 'All', page: number = 1, postsPerPage: number = 6): BlogPost[] {
    const filtered = category === 'All'
      ? this.blogPosts
      : this.blogPosts.filter(post => post.category === category);
    
    const startIndex = (page - 1) * postsPerPage;
    return filtered.slice(startIndex, startIndex + postsPerPage);
  }

  getPageCount(category: string = 'All', postsPerPage: number = 6): number {
    const filtered = category === 'All'
      ? this.blogPosts
      : this.blogPosts.filter(post => post.category === category);
    
    return Math.ceil(filtered.length / postsPerPage);
  }
}