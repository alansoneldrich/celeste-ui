import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  userInput = '';
  isLoading = false;
  messages: { sender: 'you' | 'celeste'; text: string }[] = [];
  
  sendMessage() {
    if (!this.userInput.trim()) return;
  
    this.messages.push({
      sender: 'you',
      text: this.userInput
    });
  
    // Simulate Celeste response
    this.isLoading = true;
  
    setTimeout(() => {
      this.messages.push({
        sender: 'celeste',
        text: `Echo: ${this.userInput}`
      });
      this.isLoading = false;
      this.userInput = '';
    }, 500);
  }
  
}
