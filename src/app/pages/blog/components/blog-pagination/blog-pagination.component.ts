import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pagination">
      <button 
        *ngFor="let page of pages" 
        class="page-btn"
        [class.active]="currentPage === page"
        (click)="onPageSelect(page)"
      >
        {{page}}
      </button>
    </div>
  `,
  styles: [`
    .pagination {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }

    .page-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #a0aec0;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .page-btn:hover, .page-btn.active {
      background: rgba(33, 150, 243, 0.2);
      border-color: rgba(33, 150, 243, 0.3);
      color: white;
    }
  `]
})
export class BlogPaginationComponent {
  @Input() pages: number[] = [];
  @Input() currentPage: number = 1;
  @Output() pageSelected = new EventEmitter<number>();

  onPageSelect(page: number) {
    this.pageSelected.emit(page);
  }
}