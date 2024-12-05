import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-container">
      <div class="stat-card" *ngFor="let stat of stats; let i = index" 
           [style.animation-delay]="i * 100 + 'ms'">
        <div class="stat-value">{{stat.value}}</div>
        <div class="stat-label">{{stat.label}}</div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes fadeUpCard {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      opacity: 0;
      animation: fadeIn 0.6s ease-out forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        filter: blur(8px);
      }
      to {
        opacity: 1;
        filter: blur(0);
      }
    }

    .stat-card {
      text-align: center;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.02);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
      cursor: pointer;
      overflow: hidden;
      opacity: 0;
      animation: fadeUpCard 0.5s ease-out forwards;
      transition: transform 0.3s ease;
    }

    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.05),
        transparent
      );
      transition: 0.5s;
    }

    .stat-card:hover {
      transform: scale(1.02);
    }

    .stat-card:hover::before {
      animation: shimmer 1s ease-out;
    }

    .stat-value {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateY(10px);
      opacity: 0;
      animation: fadeUpValue 0.8s ease-out forwards;
      animation-delay: 0.4s;
    }

    @keyframes fadeUpValue {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .stat-label {
      color: #a0aec0;
      font-size: 1rem;
      transition: color 0.3s ease;
    }

    .stat-card:hover .stat-label {
      color: #cbd5e0;
    }

    @media (max-width: 768px) {
      .stats-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        padding: 1rem;
      }
      .stat-value {
        font-size: 2rem;
      }
    }
  `]
})
export class StatsComponent {
  stats = [
    { value: '93%', label: 'Customer Satisfaction' },
    { value: '2.5x', label: 'Revenue Growth' },
    { value: '500K+', label: 'Interactions Analyzed' },
    { value: '45min', label: 'Response Time' }
  ];
}