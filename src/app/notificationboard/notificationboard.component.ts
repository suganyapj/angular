import { Component,OnInit } from '@angular/core';
import { NoticeService } from '../service/notice.service';
@Component({
  selector: 'app-notificationboard',
  templateUrl: './notificationboard.component.html',
  styleUrl: './notificationboard.component.css'
})
export class NotificationboardComponent implements OnInit {
  notimsg:string=""
constructor(private notice:NoticeService ){

}
ngOnInit(){
  this.notice.notificationsub.subscribe(d=>{this.notimsg=d})
    
}
}
