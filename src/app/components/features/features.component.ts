import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features">
      <div class="features-container">
        <div class="section-header">
          <h2 class="section-title">Powerful Features for Modern CX</h2>
          <p class="section-subtitle">Transform your customer experience with AI-powered tools and analytics</p>
        </div>

        <div class="features-grid">
          <div class="feature-card" *ngFor="let feature of features; let i = index" 
               [style.animation-delay]="i * 0.1 + 's'">
            <div class="feature-icon-wrapper">
              <div class="feature-icon" [innerHTML]="feature.icon"></div>
              <div class="glow-effect"></div>
            </div>
            <h3>{{feature.title}}</h3>
            <p>{{feature.description}}</p>
            <ul class="feature-points">
              <li *ngFor="let point of feature.points">{{point}}</li>
            </ul>
            <div class="feature-cta">
              <a href="#">Learn more →</a>
            </div>
          </div>
        </div>

        <div class="features-background">
          <div class="gradient-sphere"></div>
          <div class="gradient-sphere second"></div>
          <div class="grid-pattern"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      padding: 8rem 2rem;
      background: linear-gradient(180deg, #0a0f1c 0%, #0d1326 100%);
      position: relative;
      overflow: hidden;
    }

    .features-container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 1rem;
      background: linear-gradient(120deg, #fff, #a0aec0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle {
      color: #a0aec0;
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      perspective: 1000px;
    }

    .feature-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 2rem;
      transition: all 0.4s ease;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;
      backdrop-filter: blur(10px);
    }

    .feature-card:hover {
      transform: translateY(-10px) scale(1.02);
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(33, 150, 243, 0.3);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
                  0 0 30px rgba(33, 150, 243, 0.1);
    }

    .feature-icon-wrapper {
      position: relative;
      width: 60px;
      height: 60px;
      margin-bottom: 1.5rem;
    }

    .feature-icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05));
      border-radius: 16px;
      font-size: 1.5rem;
      color: #2196f3;
      position: relative;
      z-index: 1;
    }

    .glow-effect {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(33, 150, 243, 0.4), transparent 70%);
      filter: blur(10px);
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 16px;
    }

    .feature-card:hover .glow-effect {
      opacity: 1;
    }

    .feature-card h3 {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .feature-card p {
      color: #a0aec0;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .feature-points {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem;
    }

    .feature-points li {
      color: #a0aec0;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }

    .feature-points li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: #2196f3;
    }

    .feature-cta a {
      color: #2196f3;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .feature-cta a:hover {
      color: #21d4fd;
      padding-left: 0.5rem;
    }

    .features-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    .gradient-sphere {
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle at center, rgba(33, 150, 243, 0.1), transparent 70%);
      border-radius: 50%;
      filter: blur(60px);
      animation: floatSphere 20s infinite alternate ease-in-out;
    }

    .gradient-sphere.second {
      right: -200px;
      top: 40%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle at center, rgba(33, 212, 253, 0.1), transparent 70%);
      animation-delay: -10s;
    }

    .grid-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.5;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes floatSphere {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(100px, 50px);
      }
    }

    @media (max-width: 768px) {
      .features {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FeaturesComponent {
   features: Feature[] = [
  {
    icon: '<svg>...</svg>',
    title: 'AI-Powered Insights',
    description: 'Experience data-driven decisions with real-time analytics.',
    points: [
      'Dynamic content adaptation',
      'Real-time analytics',
      'Enhanced personalization',
    ],
  },
  {
    icon: '<svg>...</svg>',
    title: 'Seamless Integration',
    description: 'Integrate with existing tools for a unified workflow.',
    points: ['Easy API integration', 'Cross-platform compatibility'],
  },
     {
    icon: '<svg>...</svg>',
    title: 'Best Performance ',
    description: 'Integrate with existing tools for a unified workflow.',
    points: ['Easy API integration', 'Cross-platform compatibility'],
  }
];
}