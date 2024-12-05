import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../models/blog.model';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="blog-card" [class.featured]="post.id === 1">
      <div class="image-container">
        <img [src]="post.image" [alt]="post.title">
        <span class="category-tag">{{post.category}}</span>
      </div>
      <div class="content">
        <div class="meta">
          <span class="date">{{post.date}}</span>
          <span class="read-time">{{post.readTime}} read</span>
        </div>
        <h2>{{post.title}}</h2>
        <p>{{post.excerpt}}</p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </article>
  `,
  styles: [`
    .blog-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .blog-card:hover {
      transform: translateY(-5px);
      border-color: rgba(33, 150, 243, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .image-container {
      position: relative;
      padding-top: 60%;
    }

    .image-container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .category-tag {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.5rem 1rem;
      background: rgba(33, 150, 243, 0.9);
      color: white;
      border-radius: 100px;
      font-size: 0.8rem;
    }

    .content {
      padding: 1.5rem;
    }

    .meta {
      display: flex;
      gap: 1rem;
      color: #a0aec0;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    p {
      color: #a0aec0;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .read-more {
      color: #2196f3;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .read-more:hover {
      color: #21d4fd;
      padding-left: 0.5rem;
    }
  `]
})
export class BlogCardComponent {
  @Input() post!: BlogPost;
}