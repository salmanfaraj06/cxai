import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials">
      <h2 class="section-title">What Our Clients Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="quote">"</div>
          <p class="content">
            The AI-powered insights have transformed how we understand our customers. Our satisfaction rates have increased by 40% since implementation.
          </p>
          <div class="author">
            <div class="avatar">SJ</div>
            <div class="info">
              <div class="name">Sarah Johnson</div>
              <div class="role">CTO at TechCorp</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote">"</div>
          <p class="content">
            The predictive analytics helped us anticipate customer needs before they arose. It's like having a crystal ball for customer experience.
          </p>
          <div class="author">
            <div class="avatar">MR</div>
            <div class="info">
              <div class="name">Michael Rodriguez</div>
              <div class="role">Head of CX at GlobalTech</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote">"</div>
          <p class="content">
            The platform's ease of use and powerful features make it an essential tool for our customer success team. ROI was evident within weeks.
          </p>
          <div class="author">
            <div class="avatar">AL</div>
            <div class="info">
              <div class="name">Anna Lee</div>
              <div class="role">CEO at InnovateX</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      padding: 6rem 2rem;
      background: linear-gradient(180deg, #0d1326 0%, #0a0f1c 100%);
    }

    .section-title {
      text-align: center;
      color: white;
      font-size: 2.5rem;
      margin-bottom: 4rem;
      font-weight: 700;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .testimonial-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 2rem;
      position: relative;
    }

    .quote {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 4rem;
      color: rgba(33, 150, 243, 0.2);
      font-family: serif;
      line-height: 1;
    }

    .content {
      color: #a0aec0;
      line-height: 1.6;
      margin: 1.5rem 0;
      font-size: 1.1rem;
    }

    .author {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;
    }

    .avatar {
      width: 48px;
      height: 48px;
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
    }

    .info {
      flex: 1;
    }

    .name {
      color: white;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .role {
      color: #a0aec0;
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .testimonials {
        padding: 4rem 1rem;
      }

      .section-title {
        font-size: 2rem;
        margin-bottom: 3rem;
      }
    }
  `]
})
export class TestimonialsComponent {}