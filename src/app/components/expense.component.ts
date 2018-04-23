import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./style.component.css'],
  providers : [PostsService]
})
export class ExpenseComponent {
  title:string;
  expenses:expense[];
  expense:expense;

constructor(private postsService: PostsService){
  //console.log('constructor ran');
  //this.title = "this is title"
this.expense = {}
  this.expenses = [

    {
      name: 'milk',
      description: 'This is dummy description that I am giving.',
      price: 2
    },
    {
      name: 'curd',
      description:'This is dummy description that I am giving.',
      price: 4
    },
    {
      name: 'onion',
      description:'This is dummy description that I am giving.',
      price: 3
    },

  ],

  this.postsService.getPosts().subscribe(posts=>{
    console.log(posts)
  })

}

addExpense(){
//  console.log("I am in addExpense")
//  console.log(this.expense.name)
  this.expenses.push(this.expense)
  this.expense = {}
}


interface expense {
name: string;
description: string;
price:number;

}
}
