import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./style.component.css'],
  providers : [PostsService]
})
export class LoginComponent {

username:string;
password:string;

constructor(private postsService: PostsService) {

this.username = "";
this.password = "";

}

login(){
  console.log(this.username)
  console.log(this.password)
//  this.postsService.getAllusers().subscribe(result=>{
  this.postsService.login({username:this.username,password:this.password}).subscribe(result=>{

    console.log(result)
  })
}

export interface user {
  username: string,
  password: string
}

}
