import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/models/message';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  message: Message;

  constructor(private messageService: MessageService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.message = new Message();    

  }

  submitMessage() {
    this.messageService.addMessage(this.message).subscribe(then => {
      this.router.navigate(['/message'])
      this.toastr.success('Message ajouté ', 'C\'est bon ! ;)');

    })
  }


}
