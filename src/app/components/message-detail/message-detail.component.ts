import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  message: Message;
  listeMessages: Message[];
  confirme: boolean;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.messageService.getMessageByID(+this.route.snapshot.paramMap.get('id')).subscribe((data: Message) => {
      this.message = data;
    });
  }

  deleteMessage(id: number) {

    this.messageService.deleteMessage(id).subscribe(then => {
      this.messageService.getAllMessages().subscribe((data: Message[]) => {
        this.listeMessages = data;
      })
      this.router.navigate(['/message']);
      this.toastr.success('Ce message a bien été supprimé', 'C\'est bon ! ;)');
    });
  }

  confirmer() :void {
    this.confirme = !this.confirme
  }
}
