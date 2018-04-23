import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './components/expense.component';
import { AboutComponent } from './components/about.component';
import { FriendComponent } from './components/friend.component';
import {  HeaderComponent } from './components/header.component';
import {  LoginComponent } from './components/login.component';
import {routing} from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  declarations: [
    AppComponent,ExpenseComponent, AboutComponent, HeaderComponent,FriendComponent,LoginComponent, ProfileComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,routing,HttpClientModule,
  ],
//providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
