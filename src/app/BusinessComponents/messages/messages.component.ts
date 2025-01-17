import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Services/Chat/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  currentUser: string = 'Customer'; 
  currentUserAvatar: string = 'https://via.placeholder.com/40';
  predefinedMessages: string[] = [
    'Can you provide more details about the property?',
    'Is the price negotiable?',
    'What are the available dates for viewing?',
    'Can you send more pictures of the property?',
    'What are the terms of the lease?'
  ];

  constructor(
    private chatService: ChatService,
    private _location : Location
  ) {}

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }

  goBack(){
    this._location.back()
  }

  sendMessage(message?: string) {
    const content = message || this.newMessage;
    if (content.trim()) {
      this.chatService.sendMessage(this.currentUser, content, this.currentUserAvatar);
      this.newMessage = '';
    }
  }
}
