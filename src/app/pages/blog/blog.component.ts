import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPaginationComponent } from './components/blog-pagination/blog-pagination.component';
import { BlogService } from './services/blog.service';
import { BlogPost } from './models/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    BlogHeaderComponent,
    BlogCategoriesComponent,
    BlogCardComponent,
    BlogPaginationComponent
  ],
  template: `
    <section class="blog-section">
      <div class="container">
        <app-blog-header></app-blog-header>
        
        <app-blog-categories
          [categories]="categories"
          [selectedCategory]="selectedCategory"
          (categorySelected)="selectCategory($event)"
        ></app-blog-categories>

        <div class="blog-grid">
          <app-blog-card
            *ngFor="let post of posts"
            [post]="post"
          ></app-blog-card>
        </div>

        <app-blog-pagination
          [pages]="pages"
          [currentPage]="currentPage"
          (pageSelected)="setPage($event)"
        ></app-blog-pagination>
      </div>
    </section>
  `,
  styles: [`
    .blog-section {
      padding: 8rem 2rem;
      background: linear-gradient(180deg, #0a0f1c 0%, #0d1326 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    @media (max-width: 768px) {
      .blog-section {
        padding: 4rem 1rem;
      }

      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BlogComponent {
  selectedCategory = 'All';
  currentPage = 1;
  postsPerPage = 6;
  posts: BlogPost[] = [];
  categories: string[] = [];

  constructor(private blogService: BlogService) {
    this.categories = this.blogService.getCategories();
    this.updatePosts();
  }

  get pages(): number[] {
    const pageCount = this.blogService.getPageCount(this.selectedCategory, this.postsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.updatePosts();
  }

  setPage(page: number) {
    this.currentPage = page;
    this.updatePosts();
  }

  private updatePosts() {
    this.posts = this.blogService.getPosts(
      this.selectedCategory,
      this.currentPage,
      this.postsPerPage
    );
  }
}