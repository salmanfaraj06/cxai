import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <a routerLink="/" class="logo-text">CX<span class="highlight">AI</span></a>
        </div>
        <button class="menu-toggle" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-content" [class.active]="isMenuOpen">
          <div class="nav-links">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
            <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
            <a routerLink="/blog" routerLinkActive="active" (click)="closeMenu()">Blog</a>
            <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
          </div>
          <div class="nav-buttons">
            <button class="login-btn" (click)="closeMenu()">Login</button>
            <button class="start-btn" (click)="closeMenu()">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      max-width: 1200px;
      z-index: 1000;
      background: rgba(10, 15, 28, 0.7);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 100px;
      padding: 0.75rem 1.5rem;
    }

    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      text-decoration: none;
    }

    .highlight {
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-grow: 1;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: #a0aec0;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: color 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 100px;
    }

    .nav-links a:hover {
      color: white;
    }

    .nav-links a.active {
      background: rgba(33, 150, 243, 0.2);
      color: white;
    }

    .nav-buttons {
      display: flex;
      gap: 1rem;
    }

    .login-btn {
      background: transparent;
      border: none;
      color: white;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: color 0.3s ease;
    }

    .login-btn:hover {
      color: #2196f3;
    }

    .start-btn {
      background: linear-gradient(120deg, #2196f3, #21d4fd);
      border: none;
      color: white;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.5rem 1.5rem;
      border-radius: 100px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .start-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(33, 150, 243, 0.4);
    }

    .menu-toggle {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .menu-toggle span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 5px 0;
      transition: 0.3s;
    }

    @media (max-width: 768px) {
      .navbar {
        top: 10px;
        padding: 0.5rem 1rem;
      }

      .menu-toggle {
        display: block;
      }

      .nav-content {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(10, 15, 28, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        display: none;
      }

      .nav-content.active {
        display: flex;
      }

      .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .nav-buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .login-btn, .start-btn {
        width: 100%;
        text-align: center;
      }
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}