import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  constructor(private http:Http) { }
  
  login(email,password){
    let body={
      email:email,
      password:password
    }
    return this.http.post('http://infigp.in:9000/admin_login',body)
  }

  signup(name,email,department,password){
    let body={
      name:name,
      email:email,
      department:department,
      password:password

    }
    return this.http.post('http://infigp.in:9000/admin_reg',body)
  }

  upload(uid,question,answer,subject_code){
    let body={
      uid:uid,
      question:question,
      answer:answer,
      subject_code:subject_code
    }
    return this.http.post('http://infigp.in:9000/update',body)
  }

  update(uid,subject_code){
    let body={
      uid:uid,
      subject_code:subject_code
    }
    return this.http.post('http://infigp.in:9000/question',body)
  }
  getsubjects(){
return this.http.get('http://infigp.in:9000/subjects')
  }

  getedit(id,subject_code){
let body={
  id:id,
  subject_code:subject_code
}
    return this.http.post('http://infigp.in:9000/previousedit',body)
  }

  postedit(id,uid,question,answer,subject_code){
    let body={
      id:id,
      uid:uid,
      question:question,
      answer:answer,
      subject_code:subject_code
    }
    return this.http.post('http://infigp.in:9000/edit_subject',body)
  }



}





