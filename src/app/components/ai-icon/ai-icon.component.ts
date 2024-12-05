import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ai-icon-container">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        class="ai-icon"
      >
        <!-- Outer glowing circle -->
        <circle
          cx="30"
          cy="30"
          r="25"
          class="outer-circle"
        />
        
        <!-- Inner pulsing circle -->
        <circle
          cx="30"
          cy="30"
          r="22"
          class="inner-circle"
        />
        
        <!-- Sparkle in the center -->
        <path
          d="M30 14 L32 26 L44 30 L32 34 L30 46 L28 34 L16 30 L28 26 Z"
          class="main-sparkle"
        />
      </svg>
    </div>
  `,
  styles: [`
    .ai-icon-container {
      display: inline-block;
      filter: drop-shadow(0 0 10px rgba(33, 150, 243, 0.3));
    }

    .ai-icon {
      transform-origin: center;
    }

    .outer-circle {
      fill: none;
      stroke: rgba(33, 150, 243, 0.2);
      stroke-width: 2;
      animation: pulseGlow 2s infinite ease-in-out;
    }

    .inner-circle {
      fill: none;
      stroke: rgba(33, 150, 243, 0.4);
      stroke-width: 1.5;
      animation: pulseSiri 2s infinite ease-in-out;
    }

    .main-sparkle {
      fill: #2196f3;
      opacity: 0.9;
      animation: rotateSparkle 4s infinite linear;
      transform-origin: center;
      filter: drop-shadow(0 0 5px rgba(33, 150, 243, 0.5));
    }

    @keyframes rotateSparkle {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes pulseSiri {
      0% {
        transform: scale(0.95);
        opacity: 0.6;
      }
      50% {
        transform: scale(1);
        opacity: 0.8;
      }
      100% {
        transform: scale(0.95);
        opacity: 0.6;
      }
    }

    @keyframes pulseGlow {
      0% {
        transform: scale(0.9);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.05);
        opacity: 0.5;
      }
      100% {
        transform: scale(0.9);
        opacity: 0.3;
      }
    }
  `]
})
export class AiIconComponent {}