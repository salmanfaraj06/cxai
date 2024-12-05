import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiIconComponent } from '../ai-icon/ai-icon.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';

@Component({
  selector: 'app-chat-button',
  standalone: true,
  imports: [CommonModule, AiIconComponent, ChatWindowComponent],
  template: `
    <div class="chat-button-container">
      <button class="chat-button" (click)="toggleChat()">
        <app-ai-icon></app-ai-icon>
      </button>
      <app-chat-window [(isOpen)]="isChatOpen"></app-chat-window>
    </div>
  `,
  styles: [`
    .chat-button-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }

    .chat-button {
      background: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: transform 0.2s ease;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chat-button:hover {
      transform: scale(1.05);
    }

    .chat-button:active {
      transform: scale(0.95);
    }
  `]
})
export class ChatButtonComponent {
  isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}