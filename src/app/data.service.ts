import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:Http) { }
  
  login(email,password){
    let body={
      email:email,
      password:password
    }
    return this.http.post('http://localhost:9000/admin_login',body)
  }

  signup(name,email,department,password){
    let body={
      name:name,
      email:email,
      department:department,
      password:password

    }
    return this.http.post('http://localhost:9000/admin_reg',body)
  }

  upload(uid,question,answer){
    let body={
      uid:uid,
      question:question,
      answer:answer
    }
    return this.http.post('http://localhost:9000/update',body)
  }

  update(uid){
    let body={
      uid:uid
    }
    return this.http.post('http://localhost:9000/question',body)
  }
}





