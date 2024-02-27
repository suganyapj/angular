import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user:any;
constructor(private route:ActivatedRoute,private userservcie:UserserviceService){}
ngOnInit(): void {
  let id=this.route.snapshot.params['id'];
  this.userservcie.getusers(id).subscribe((u)=>{
    console.log(u),
    this.user=u
  })

}
}
