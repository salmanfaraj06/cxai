import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h1 class="title">Get in Touch</h1>
            <p class="subtitle">We'd love to hear from you. Our team is always here to chat.</p>

            <div class="info-cards">
              <div class="info-card">
                <div class="icon">📍</div>
                <h3>Office</h3>
                <p>123 Innovation Drive<br>Tech Valley, CA 94043</p>
              </div>

              <div class="info-card">
                <div class="icon">📞</div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567<br>Mon-Fri 9am-6pm PST</p>
              </div>

              <div class="info-card">
                <div class="icon">✉️</div>
                <h3>Email</h3>
                <p>hello</p>
              </div>
            </div>

            <div class="social-links">
              <a href="#" class="social-link">𝕏</a>
              <a href="#" class="social-link">in</a>
              <a href="#" class="social-link">f</a>
              <a href="#" class="social-link">🔗</a>
            </div>
          </div>

          <div class="contact-form-container">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  [class.error]="isFieldInvalid('name')"
                >
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  [class.error]="isFieldInvalid('email')"
                >
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  [class.error]="isFieldInvalid('subject')"
                >
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="5"
                  [class.error]="isFieldInvalid('message')"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" [disabled]="!contactForm.valid">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="background-pattern"></div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 8rem 2rem;
      background: linear-gradient(180deg, #0a0f1c 0%, #0d1326 100%);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .title {
      font-size: 3rem;
      color: white;
      margin-bottom: 1rem;
      background: linear-gradient(120deg, #fff, #a0aec0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      color: #a0aec0;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .info-cards {
      display: grid;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .info-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
      border-color: rgba(33, 150, 243, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .info-card h3 {
      color: white;
      margin-bottom: 0.5rem;
    }

    .info-card p {
      color: #a0aec0;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
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

    .contact-form-container {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 24px;
      padding: 2rem;
      backdrop-filter: blur(10px);
    }

    .contact-form {
      display: grid;
      gap: 1.5rem;
    }

    .form-group {
      display: grid;
      gap: 0.5rem;
    }

    label {
      color: #a0aec0;
      font-size: 0.9rem;
    }

    input, textarea {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      color: white;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: rgba(33, 150, 243, 0.5);
      box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
    }

    input.error, textarea.error {
      border-color: rgba(255, 87, 87, 0.5);
    }

    .submit-btn {
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(33, 150, 243, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
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
      .contact-section {
        padding: 4rem 1rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .title {
        font-size: 2rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
  }
}