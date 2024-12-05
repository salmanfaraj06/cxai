import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-section">
            <h3 class="logo-text">CX<span class="highlight">AI</span></h3>
            <p class="footer-description">
              Transforming customer experience with AI-powered insights and analytics.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">𝕏</a>
              <a href="#" class="social-link">in</a>
              <a href="#" class="social-link">f</a>
              <a href="#" class="social-link">🔗</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Case Studies</a>
            <a href="#">Documentation</a>
          </div>

          <div class="footer-section">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press Kit</a>
          </div>

          <div class="footer-section">
            <h4>Resources</h4>
            <a href="#">Community</a>
            <a href="#">Support</a>
            <a href="#">Developer API</a>
            <a href="#">Status</a>
          </div>

          <div class="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Compliance</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 CXAI. All rights reserved.</p>
          <div class="footer-badges">
            <span class="badge">SOC2 Compliant</span>
            <span class="badge">GDPR Ready</span>
            <span class="badge">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(180deg, #0a0f1c 0%, #070b14 100%);
      padding: 6rem 2rem 2rem;
      color: #a0aec0;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr repeat(4, 1fr);
      gap: 4rem;
      margin-bottom: 4rem;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin: 0;
    }

    .highlight {
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .footer-description {
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 1rem 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: rgba(33, 150, 243, 0.2);
      transform: translateY(-2px);
    }

    .footer-section h4 {
      color: white;
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 1rem;
    }

    .footer-section a {
      color: #a0aec0;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: white;
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-badges {
      display: flex;
      gap: 1rem;
    }

    .badge {
      padding: 0.25rem 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 100px;
      font-size: 0.8rem;
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }

      .footer-section:first-child {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 768px) {
      .footer {
        padding: 4rem 1rem 2rem;
      }

      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}