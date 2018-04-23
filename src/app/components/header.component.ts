import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./style.component.css']
})
export class HeaderComponent {

links:info[]

constructor() {

this.links= [
  {
    title: 'Expense',
    url: ''
  },
  {
    title: 'Groups',
    url: 'google.com'
  },
  {
    title: 'Friends',
    url: 'friend'
  },
  {
    title: 'About',
    url: 'about'
  },
  {
    title: 'Logout',
    url: 'logout'
  }
]

}



interface info{
  title: string;
  url: string;
}

}
