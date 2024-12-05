import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-content">
      <h1 class="title">
        Transform Customer Experience with
        <span class="highlight">AI-Powered</span> Insights
      </h1>
      <p class="subtitle">
        Harness the power of artificial intelligence to understand, predict, and enhance every customer interaction in real-time.
      </p>
      <div class="cta-buttons">
        <button class="primary-button">Get Started Free</button>
        <button class="secondary-button">Watch Demo</button>
      </div>
      <div class="trust-badges">
        <span>Trusted by leading companies worldwide</span>
        <div class="badges">
          <div class="badge">⭐ 4.9/5 on G2</div>
          <div class="badge">🏆 Leader in CX Analytics</div>
          <div class="badge">🔒 SOC 2 Certified</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-content {
      max-width: 800px;
      margin-bottom: 4rem;
    }

    .title {
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.2;
      color: white;
      margin-bottom: 1.5rem;
    }

    .highlight {
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.25rem;
      line-height: 1.6;
      color: #a0aec0;
      margin-bottom: 2.5rem;
      max-width: 600px;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .primary-button {
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .primary-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(33, 150, 243, 0.4);
    }

    .secondary-button {
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      background: transparent;
      border: 2px solid rgba(33, 150, 243, 0.5);
      border-radius: 8px;
      cursor: pointer;
      transition: border-color 0.2s ease;
    }

    .secondary-button:hover {
      border-color: #2196f3;
    }

    .trust-badges {
      color: #a0aec0;
    }

    .trust-badges span {
      display: block;
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    .badges {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .badge {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      color: white;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2.5rem;
      }

      .cta-buttons {
        flex-direction: column;
      }

      .badges {
        gap: 0.75rem;
      }
    }
  `]
})
export class HeroContentComponent {}