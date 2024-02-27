import { Component,OnInit } from '@angular/core';
import { UserserviceService } from './service/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'secondapp';
  pagetitle='services in angualar'
  users:any;
  ngOnInit() {
    this.userservice.getallusers().subscribe((data)=>{
    this.users=data;
    
   });
    
  }
  constructor(private userservice:UserserviceService){
  }
  bday=new Date('11/17/1996')
  salary:number=20000;
  age:number=27;
  date=new Date();
  joindate=new Date().getFullYear()
}
