import { Component } from '@angular/core';
import { NoticeService } from '../service/notice.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private notice:NoticeService){}
sendmsg(data:any){
this.notice.sendNotification(data.value)
}
}
