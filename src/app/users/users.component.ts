import { Component ,OnInit} from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  pagetitle:string='route guards';
  users:any;
constructor(private userservice:UserserviceService ){

}
ngOnInit(): void {
 this.userservice.getallusers().subscribe((data)=>{
  this.users=data;
 })
}
}
