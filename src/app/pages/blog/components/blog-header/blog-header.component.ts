import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header">
      <h1 class="title">Latest Insights</h1>
      <p class="subtitle">Explore the latest trends in AI and customer experience</p>
    </div>
  `,
  styles: [`
    .header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .title {
      font-size: 3rem;
      color: white;
      margin-bottom: 1rem;
      background: linear-gradient(120deg, #fff, #a0aec0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      color: #a0aec0;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2rem;
      }
    }
  `]
})
export class BlogHeaderComponent {}