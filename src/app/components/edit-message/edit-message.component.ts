import {MessageService} from '../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/models/message';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.css']
})
export class EditMessageComponent implements OnInit {
  id: number;
  message: Message;


  constructor(private route: ActivatedRoute, private router: Router, private MessageService: MessageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.MessageService.getMessageByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Message) => {
      this.message = data;
    });
  } 

  editMessage() {
    //lance la fonction editMessage de Message.service
    this.MessageService.editMessage(this.message).subscribe(then => {
     // change l'url avec la route '/Message'
     this.router.navigate(['/message']);
     this.toastr.success('Message modifié ', 'C\'est bon ! ;)');

     });
   }
}
