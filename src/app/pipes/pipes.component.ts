import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  filteredstring:string='';
  appstatus=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('Users data received')},3000)
  })
users=[{name:'sugnayapannerselvam',joinedDate:new Date(1,17,1996)},
{name:'jayanthi',joinedDate:new Date(2,2,1992)},
{name:'oppli',joinedDate:new Date(3,30,2000)},

]
Onadduser(){
  this.users.push({name:'sample',joinedDate:new Date(3,19,2020)})
}
}