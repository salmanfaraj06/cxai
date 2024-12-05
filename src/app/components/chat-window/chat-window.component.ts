import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-window" [class.open]="isOpen">
      <div class="chat-header">
        <h3>AI Assistant</h3>
        <button class="close-button" (click)="closeChat()">×</button>
      </div>
      <div class="chat-content">
        <div class="messages">
          <div *ngFor="let message of messages"
               class="message"
               [ngClass]="{'user-message': message.startsWith('You:'), 'ai-message': message.startsWith('AI:')}">
            {{ message }}
          </div>
        </div>
        <div class="input-container">
          <input [(ngModel)]="userInput"
                 (keyup.enter)="sendMessage()"
                 placeholder="Type a message..." />
          <button (click)="sendMessage()"
                  class="send-button">Send</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chat-window {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 360px;
      height: 480px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      transform: translateY(100%);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    .chat-window.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    .chat-header {
      padding: 16px;
      background: #007bff;
      color: white;
      border-radius: 12px 12px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-header h3 {
      margin: 0;
      font-size: 18px;
    }

    .close-button {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }

    .chat-content {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .messages {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }

    .message {
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 8px;
      max-width: 80%;
      word-wrap: break-word;
    }

    .user-message {
      background: #e1ffc7;
      align-self: flex-end;
    }

    .ai-message {
      background: #f1f1f1;
      align-self: flex-start;
    }

    .input-container {
      display: flex;
      align-items: center;
    }

    .input-container input {
      flex: 1;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-right: 8px;
    }

    .send-button {
      background: #007bff;
      color: white;
      border: none;
      padding: 12px 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .send-button:hover {
      background: #0056b3;
    }
  `]
})
export class ChatWindowComponent {
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  messages: string[] = ['Hello! How can I help you today?'];
  userInput: string = '';

  constructor(private chatService: ChatService) {}

  closeChat() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push(`You: ${this.userInput}`);

      this.chatService.getChatResponse(this.userInput).subscribe({
        next: (response) => {
          const aiMessage = response.choices?.[0]?.message?.content?.trim() || 'No response from AI';
          this.messages.push(`AI: ${aiMessage}`);
        },
        error: (error) => {
          this.messages.push('AI: Error fetching response');
          console.error('Chat error:', error);
        }
      });

      this.userInput = '';
    }
  }
}