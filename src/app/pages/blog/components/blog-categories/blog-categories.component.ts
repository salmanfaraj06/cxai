import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="categories">
      <button 
        *ngFor="let category of categories" 
        class="category-btn"
        [class.active]="selectedCategory === category"
        (click)="onCategorySelect(category)"
      >
        {{category}}
      </button>
    </div>
  `,
  styles: [`
    .categories {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .category-btn {
      padding: 0.5rem 1.5rem;
      border-radius: 100px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #a0aec0;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .category-btn:hover, .category-btn.active {
      background: rgba(33, 150, 243, 0.2);
      border-color: rgba(33, 150, 243, 0.3);
      color: white;
    }
  `]
})
export class BlogCategoriesComponent {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string = 'All';
  @Output() categorySelected = new EventEmitter<string>();

  onCategorySelect(category: string) {
    this.categorySelected.emit(category);
  }
}