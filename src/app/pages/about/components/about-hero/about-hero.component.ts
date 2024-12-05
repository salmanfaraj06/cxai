import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-hero">
      <div class="container">
        <h1 class="title">Our Story</h1>
        <p class="subtitle">Transforming customer experiences through innovation and AI</p>
        <div class="stats">
          <div class="stat">
            <span class="number">5+</span>
            <span class="label">Years of Innovation</span>
          </div>
          <div class="stat">
            <span class="number">100+</span>
            <span class="label">Team Members</span>
          </div>
          <div class="stat">
            <span class="number">50M+</span>
            <span class="label">Interactions Analyzed</span>
          </div>
        </div>
      </div>
      <div class="background-pattern"></div>
    </section>
  `,
  styles: [`
    .about-hero {
      padding: 8rem 2rem 4rem;
      position: relative;
      overflow: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .title {
      font-size: 4rem;
      color: white;
      margin-bottom: 1rem;
      background: linear-gradient(120deg, #fff, #a0aec0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      color: #a0aec0;
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto 4rem;
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 4rem;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .number {
      font-size: 3rem;
      font-weight: 700;
      color: #2196f3;
      margin-bottom: 0.5rem;
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .label {
      color: #a0aec0;
      font-size: 1rem;
    }

    .background-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(33, 212, 253, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    @media (max-width: 768px) {
      .about-hero {
        padding: 6rem 1rem 3rem;
      }

      .title {
        font-size: 2.5rem;
      }

      .stats {
        flex-direction: column;
        gap: 2rem;
      }
    }
  `]
})
export class AboutHeroComponent {}