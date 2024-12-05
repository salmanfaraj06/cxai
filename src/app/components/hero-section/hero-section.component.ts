import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatButtonComponent } from '../chat-button/chat-button.component';
import { StatsComponent } from './stats/stats.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { AnimatedCubeComponent } from '../animated-cube/animated-cube.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    ChatButtonComponent,
    StatsComponent,
    HeroContentComponent,
    AnimatedCubeComponent
  ],
  template: `
    <section class="hero">
      <div class="hero-container">
        <app-hero-content></app-hero-content>
        <app-animated-cube></app-animated-cube>
        <app-stats></app-stats>
      </div>
      <div class="background-gradient"></div>
      <app-chat-button></app-chat-button>
    </section>
  `,
  styles: [`
    .hero {
      min-height: fit-content;
      background-color: #0a0f1c;
      position: relative;
      overflow: hidden;
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 6rem 2rem;
      position: relative;
      z-index: 1;
    }

    .background-gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 0%, rgba(33, 150, 243, 0.15), transparent 50%);
      pointer-events: none;
    }

    @media (max-width: 768px) {
      .hero-container {
        padding: 4rem 1rem;
      }
    }
  `]
})
export class HeroSectionComponent {}