import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor( private http:HttpClient) { }
addsignup=(item:any)=>{
    return  this.http.post("https://techblogict.herokuapp.com/signup",{item});
  }
addblogcategory=(item:any)=>{
    return  this.http.post("https://techblogict.herokuapp.com/addblogcategory",{item});
  }
loginadd=(data:any)=>{
   return this.http.post<any>("https://techblogict.herokuapp.com/login",{data});
 }
loggedin(){
  return !!localStorage.getItem('token');
 }
 
getToken(){
  return localStorage.getItem('token');
}
}







