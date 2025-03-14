import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'siaf-chat-boot-agente',
  standalone: true,
  imports: [],
  templateUrl: './chat-boot-agente.component.html',
  styleUrls: ['./chat-boot-agente.component.css']
})
export class ChatBootAgenteComponent implements AfterViewInit {

  chatToggleBtn: HTMLElement | null = null;
  chatContainer: HTMLElement | null = null;
  minimizeChat: HTMLElement | null = null;
  chatIcon: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.chatToggleBtn = document.getElementById('chatToggleBtn');
    this.chatContainer = document.getElementById('chatContainer');
    this.minimizeChat = document.getElementById('minimizeChat');
    this.chatIcon = document.getElementById('chatIcon');
  }

  toggleChatBot() {

    console.log(this.chatContainer?.classList)
    this.chatContainer?.classList.toggle('hidden');

    if (!this.chatContainer?.classList.contains('hidden')) {
      this.chatIcon?.classList.remove('fa-robot');
      this.chatIcon?.classList.add('fa-times');
    } else {
      this.chatIcon?.classList.remove('fa-times');
      this.chatIcon?.classList.add('fa-robot');
    }
  }

  minimizeChatBot() {
    this.chatContainer?.classList.add('hidden');
    this.chatIcon?.classList.remove('fa-times');
    this.chatIcon?.classList.add('fa-robot');
  }

}
