import { Component ,OnInit} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit {
ngOnInit() {
  const observable=new Observable((obj)=>{obj.next(Math.random())});
observable.subscribe(d=>console.log(d));
observable.subscribe(d=>console.log(d));
const sub =new Subject();
sub.subscribe(e=>console.log(e))
sub.subscribe(e=>console.log(e))
sub.next(2024);
const bsub=new BehaviorSubject(96)
bsub.subscribe(s=>console.log(`behaviour subject ${s}`));
bsub.next(26)
bsub.subscribe(s=>console.log(`behaviour subject ${s}`))
}
}
