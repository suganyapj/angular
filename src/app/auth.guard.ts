import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
 export class AuthGuard implements CanActivate{
  constructor(private authservice:AuthService){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
 boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  if(this.authservice.isUserLogedin()){
    return true;
  }
  else{
    alert('permission denied')
    return false;
  }
  }
  
 }
 