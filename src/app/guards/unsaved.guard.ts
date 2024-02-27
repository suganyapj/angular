import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AdduserComponent } from "../adduser/adduser.component";
import { Observable } from "rxjs";
export interface canComponentLeave{
  canleave:()=> boolean}
@Injectable({providedIn:'root'})
export class UnsavedGuards implements CanDeactivate<canComponentLeave>{
canDeactivate(component: canComponentLeave): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
  if(component.canleave)
  {
   return component.canleave()
}
else{
  return true;
}
}}