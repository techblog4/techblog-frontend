import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

constructor(public http:HttpClient) { }
  
homeadd(){
  return this.http.get("https://techblogict.herokuapp.com/home");
}
carouselAdd(){
  return this.http.get("https://techblogict.herokuapp.com/homecarosel");
}
getAllBlogs(){
  return this.http.get("https://techblogict.herokuapp.com/getAllBlogs");
}
activeBlogs(){
  return this.http.get("https://techblogict.herokuapp.com/activeBlogs");
}
rejectedBlogs(){
  return this.http.get("https://techblogict.herokuapp.com/rejectedBlogs");
}
getBlogCategory(){
  return this.http.get("https://techblogict.herokuapp.com/getBlogCategory");
}
getNotApprovedBlogs(){
  return this.http.get("https://techblogict.herokuapp.com/getNotApprovedBlogs");
}
getTrainerBlogs(data:any){
  return this.http.post("https://techblogict.herokuapp.com/currentUserBlogs",{data:data});
}
getBlogById(data:any){
  return this.http.post("https://techblogict.herokuapp.com/getBlogById",{data:data})
}

getUserName(data:any){
  return this.http.post<any>('https://techblogict.herokuapp.com/getUserName', {data:data})
}

getPost(id:any){
    return this.http.get("https://techblogict.herokuapp.com/"+id);
}
getCategoryById(id:any){
    return this.http.get("https://techblogict.herokuapp.com/getCategoryById/"+id);
}
getBlogByCategory(id: any){
  return this.http.get("https://techblogict.herokuapp.com/getBlogByCategory/"+id);
}
singlePost(_id:any){
  
  return this.http.get("https://techblogict.herokuapp.com/"+_id);

}
getBlogCounts(){
  return this.http.get("https://techblogict.herokuapp.com/getBlogCounts")
}
editPost(post:any){
  console.log('client update')
    return this.http.put("https://techblogict.herokuapp.com/update",post).
    subscribe((data) =>{console.log(data)}) ;
    
}
deletePost(id:any){
  return this.http.delete("https://techblogict.herokuapp.com/remove/"+id)
}
deleteCategory(id:any){
  return this.http.delete("https://techblogict.herokuapp.com/deleteCategory/"+id)
}

approveBlog(data:any,category: any){
  return this.http.post("https://techblogict.herokuapp.com/approveBlog/"+category, {data:data})
  .subscribe(data=>{console.log(data)})
}
rejectBlog(data:any){
  return this.http.post("https://techblogict.herokuapp.com/rejectBlog/", {data:data})
  .subscribe(data=>{console.log(data)})
}

useradd(post:any){
  return this.http.post("https://techblogict.herokuapp.com/addpost", post)
  .subscribe(data=>{console.log(data)})
}
getCurrentUser(data:any){
  return this.http.post<any>('https://techblogict.herokuapp.com/getCurrentUser', {data:data})
}
changePwd(data:any,adminEmail: any){
  return this.http.post("https://techblogict.herokuapp.com/changePwd/"+adminEmail, data)
}


}
