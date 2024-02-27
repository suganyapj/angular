import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  getallusers(){
// return 
return this.http.get('https://jsonplaceholder.typicode.com/users')
}

getusers(id:number){
  return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)


}}
