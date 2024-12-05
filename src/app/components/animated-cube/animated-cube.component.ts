import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-cube',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cube-container">
      <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
      <div class="glow"></div>
      <div class="particles">
        <div class="particle" *ngFor="let i of [1,2,3,4,5]"></div>
      </div>
    </div>
  `,
  styles: [`
    .cube-container {
      position: absolute;
      right: 10%;
      top: 20%;
      transform-style: preserve-3d;
      width: 200px;
      height: 200px;
      perspective: 1000px;
    }

    .cube {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      animation: rotate 20s linear infinite;
    }

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(33, 150, 243, 0.1);
      border: 2px solid rgba(33, 150, 243, 0.3);
      backdrop-filter: blur(5px);
      box-shadow: inset 0 0 20px rgba(33, 150, 243, 0.2);
    }

    .front  { transform: rotateY(0deg) translateZ(100px); }
    .back   { transform: rotateY(180deg) translateZ(100px); }
    .right  { transform: rotateY(90deg) translateZ(100px); }
    .left   { transform: rotateY(-90deg) translateZ(100px); }
    .top    { transform: rotateX(90deg) translateZ(100px); }
    .bottom { transform: rotateX(-90deg) translateZ(100px); }

    .glow {
      position: absolute;
      width: 200%;
      height: 200%;
      left: -50%;
      top: -50%;
      background: radial-gradient(circle at center, rgba(33, 150, 243, 0.2) 0%, transparent 70%);
      filter: blur(30px);
      animation: pulse 4s ease-in-out infinite;
      pointer-events: none;
    }

    .particles {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .particle {
      position: absolute;
      width: 8px;
      height: 8px;
      background: rgba(33, 150, 243, 0.6);
      border-radius: 50%;
      animation: float-particle 6s infinite;
    }

    .particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
    .particle:nth-child(2) { left: 80%; top: 60%; animation-delay: 1s; }
    .particle:nth-child(3) { left: 30%; top: 80%; animation-delay: 2s; }
    .particle:nth-child(4) { left: 70%; top: 30%; animation-delay: 3s; }
    .particle:nth-child(5) { left: 50%; top: 50%; animation-delay: 4s; }

    @keyframes rotate {
      0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
      100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.2); }
    }

    @keyframes float-particle {
      0%, 100% { transform: translate(0, 0); opacity: 0; }
      25% { transform: translate(20px, -20px); opacity: 1; }
      50% { transform: translate(40px, 0); opacity: 0.5; }
      75% { transform: translate(20px, 20px); opacity: 1; }
    }

    @media (max-width: 768px) {
      .cube-container {
        right: 5%;
        top: 15%;
        transform: scale(0.6);
      }
    }
  `]
})
export class AnimatedCubeComponent {}