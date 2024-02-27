import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AdminGuard } from './guards/admin.guard';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UnsavedGuards } from './guards/unsaved.guard';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'rxjs',component:RxjsComponent},
  {path:'about',component:AboutComponent,
  children:[
    {path:'location',outlet:'map',component:LocationComponent},
    {path:'feedback',outlet:'feeds',component:FeedbackComponent}
  ]},
  {path:'contact',component:ContactComponent},
  {path:'users',component:UsersComponent,
  // canActivate:[AuthGuard]
},
  {path:'user/:id',component:UserComponent,canActivate:[AuthGuard],canActivateChild:[AdminGuard],
children:[
  // {path:'',redirectTo:'address',pathMatch:'full'},
  {path:'address',component:AddressComponent},
  {path:'company',component:CompanyComponent}]},
  {path:'adduser',component:AdduserComponent,canDeactivate:[UnsavedGuards]},
  {path:'pipes',component:PipesComponent},
  {path:'**',redirectTo:'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
