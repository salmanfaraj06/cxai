import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="team-section">
      <div class="container">
        <h2 class="section-title">Meet Our Team</h2>
        <p class="section-subtitle">Passionate innovators driving the future of CX</p>
        
        <div class="team-grid">
          <div *ngFor="let member of team" class="team-card">
            <div class="member-image">
              <img [src]="member.image" [alt]="member.name">
              <div class="social-links">
                <a *ngIf="member.social.twitter" [href]="member.social.twitter" target="_blank">𝕏</a>
                <a *ngIf="member.social.linkedin" [href]="member.social.linkedin" target="_blank">in</a>
                <a *ngIf="member.social.github" [href]="member.social.github" target="_blank">gh</a>
              </div>
            </div>
            <div class="member-info">
              <h3>{{member.name}}</h3>
              <p>{{member.role}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-section {
      padding: 6rem 2rem;
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
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
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
    }

    .team-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .team-card:hover {
      transform: translateY(-5px);
      border-color: rgba(33, 150, 243, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .member-image {
      position: relative;
      padding-top: 100%;
    }

    .member-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .social-links {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      display: flex;
      gap: 1rem;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }

    .team-card:hover .social-links {
      opacity: 1;
      transform: translateY(0);
    }

    .social-links a {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      background: rgba(33, 150, 243, 0.5);
      transform: translateY(-2px);
    }

    .member-info {
      padding: 1.5rem;
      text-align: center;
    }

    .member-info h3 {
      color: white;
      margin-bottom: 0.5rem;
    }

    .member-info p {
      color: #a0aec0;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .team-section {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class TeamComponent {
  team: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://source.unsplash.com/random/400x400?portrait=1',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://source.unsplash.com/random/400x400?portrait=2',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emma Williams',
      role: 'Head of AI Research',
      image: 'https://source.unsplash.com/random/400x400?portrait=3',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://source.unsplash.com/random/400x400?portrait=4',
      social: {
        twitter: '#',
        github: '#'
      }
    }
  ];
}