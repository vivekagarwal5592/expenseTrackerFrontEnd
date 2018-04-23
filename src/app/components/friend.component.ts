import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./style.component.css'],
  providers : [PostsService]
})
export class FriendComponent {
  title:string;
  friendlist:friend[];
  friend:friend;

  constructor(private postsService: PostsService){
    //console.log('constructor ran');
    //this.title = "this is title"
    this.friend= {}
    this.friendlist= [

      {
        name: 'vivek',
        email: 'vivekagarwl5592@gmail.com'
      },

      {
        name: 'rishabh',
        email: 'rish@gmail.com'
      }

    ],

    this.postsService.getPosts().subscribe(posts=>{
      console.log(posts)
    })

  }

  addFriend(){
    console.log("I am in addExpense")
    //console.log(this.expense.name)
    this.friendlist.push(this.friend)
      this.friend= {}
  }


  interface friend{
    name: string;
    email: string;
  }
}
