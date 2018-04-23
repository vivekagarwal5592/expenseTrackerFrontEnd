import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json; charset=UTF-8',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class PostsService{
  constructor(private http: HttpClient){
    console.log('PostsService Initialized...');
  }

  getPosts(){
    return  this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res =>res.json());
  }

  getAllusers(){
    return  this.http.get('http://localhost:7000/user/getallusers')
      .map(res =>res.json());
  }

  login(d){
    let data = {
    username : 'vivek',
      password : 'v'
    } ;

let username = 'vivek';
let password = 'vivek';

    let x = JSON.stringify(data)

    let opts = new RequestOptions();

    return  this.http.post('http://localhost:7000/user/login', data ,httpOptions

    )
      .map(res =>res.json());

  }

  profile(id){

    return  this.http.post('http://localhost:7000/user/profile/'+id,httpOptions)
      .map(res =>res.json());


  }

  export interface user  {
    username: string,
    password: string
  }

}
