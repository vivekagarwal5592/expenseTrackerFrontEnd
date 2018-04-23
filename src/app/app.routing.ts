import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {ExpenseComponent} from './components/expense.component'
import {AboutComponent} from './components/about.component'
import {FriendComponent} from './components/friend.component'
import {LoginComponent} from './components/login.component'

const  appRoutes: Routes = [
  {
    path: '',
    component:ExpenseComponent
  }
  ,
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'friend',
    component:FriendComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
