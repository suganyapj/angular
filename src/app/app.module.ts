import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserserviceService } from './service/userservice.service';
import { AboutComponent } from './about/about.component';
import { AgePipe } from './pipes/age.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationComponent } from './location/location.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NoticeService } from './service/notice.service';
import { NotificationboardComponent } from './notificationboard/notificationboard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnsavedGuards } from './guards/unsaved.guard';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipes } from './pipes/filter.pipes';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AgePipe,
    HomeComponent,
    ContactComponent,
    UsersComponent,
    UserComponent,
    FeedbackComponent,
    LocationComponent,
    AddressComponent,
    CompanyComponent,
    RxjsComponent,
    NotificationboardComponent,
    AdduserComponent,
    PipesComponent,ShortenPipe,FilterPipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [UserserviceService,AuthGuard,AdminGuard, provideAnimationsAsync(),NoticeService,UnsavedGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
