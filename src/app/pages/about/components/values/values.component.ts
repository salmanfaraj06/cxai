import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <p class="section-subtitle">The principles that guide everything we do</p>
        
        <div class="values-grid">
          <div *ngFor="let value of values" class="value-card">
            <div class="icon">{{value.icon}}</div>
            <h3>{{value.title}}</h3>
            <p>{{value.description}}</p>
          </div>
        </div>
      </div>
      <div class="background-pattern"></div>
    </section>
  `,
  styles: [`
    .values-section {
      padding: 6rem 2rem;
      position: relative;
      overflow: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .section-title {
      text-align: center;
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(120deg, #fff, #a0aec0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle {
      text-align: center;
      color: #a0aec0;
      font-size: 1.1rem;
      margin-bottom: 4rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .value-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .value-card:hover {
      transform: translateY(-5px);
      border-color: rgba(33, 150, 243, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .icon {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    h3 {
      color: white;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    p {
      color: #a0aec0;
      line-height: 1.6;
    }

    .background-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 80% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 20% 80%, rgba(33, 212, 253, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    @media (max-width: 768px) {
      .values-section {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .values-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ValuesComponent {
  values: Value[] = [
    {
      icon: '🎯',
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional value and support.'
    },
    {
      icon: '🔒',
      title: 'Trust & Security',
      description: 'We maintain the highest standards of data security and privacy in everything we do.'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'We strive to make a positive impact on businesses and communities worldwide.'
    },
    {
      icon: '🚀',
      title: 'Continuous Improvement',
      description: 'We believe in the power of iteration and are always looking for ways to improve.'
    },
    {
      icon: '🌈',
      title: 'Diversity & Inclusion',
      description: 'We celebrate diversity and foster an inclusive environment where everyone can thrive.'
    }
  ];
}