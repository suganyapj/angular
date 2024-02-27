import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { canComponentLeave } from '../guards/unsaved.guard';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent implements canComponentLeave {
  canleave():boolean{
    if(this.username.dirty){
      return confirm('u have some unsaved changed save it b4 leave')
    }
    else{
      return true;
    }
  }
username:FormControl=new FormControl()
}
