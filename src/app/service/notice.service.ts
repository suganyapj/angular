import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class NoticeService{
    public notificationsub=new Subject<string>();
    constructor(){}
sendNotification(data:any){
this.notificationsub.next(data)
}
}