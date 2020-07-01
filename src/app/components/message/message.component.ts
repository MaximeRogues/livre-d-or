import {MessageService} from '../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  listeMessages: Message[];

  constructor(private MessageService: MessageService) { }

  ngOnInit(): void {

    this.MessageService.getAllMessages().subscribe((data: Message[]) => {
      this.listeMessages = data;
    })
    
  }

  

}
