import { Injectable, signal } from '@angular/core';
import { BlogEntry } from '../models/blog-entry.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'

})
export class BlogsvcService {

  BlogSignal = signal<BlogEntry[]>([]);

  constructor(private httpClient:HttpClient, private authSvc:AuthService)
  {
    this.RetreiveBlogEntriesFromStorage();
    
  }

  async AddBlogEntry(newEntry:BlogEntry){
    let newBlogPost = await firstValueFrom(this.httpClient.post('http://localhost:3000/blogs', { title:newEntry.title, content:newEntry.content}, {headers:{
      Authorization: `Bearer ${this.authSvc.TokenSignal()}`
    }}));
    if(newBlogPost)
    {
      const currentEntries = this.BlogSignal();
      const newEntries = [...currentEntries, newEntry];
      this.BlogSignal.set(newEntries);
    }
    else
    {
      alert('Error');
    }
    
  }

  SaveBlogEntriesToStorage(){
    const currentBlogEntries = this.BlogSignal();
    localStorage.setItem('MyBlogData', JSON.stringify(currentBlogEntries));
  }

  async RetreiveBlogEntriesFromStorage()
  {
    /*let stringBlogEntries = localStorage.getItem('MyBlogData');
    if(stringBlogEntries)
    {
      let blogEntries: BlogEntry[] = JSON.parse(stringBlogEntries);
      this.BlogSignal.set(blogEntries);
    }*/

    let response = await firstValueFrom(this.httpClient.get('http://localhost:3000/blogs'));
    this.BlogSignal.set(response as BlogEntry[]);
    return response;
  }

  async EditPost(editEntry:BlogEntry)
  {
   let response = await firstValueFrom(this.httpClient.put(`http://localhost:3000/blogs/${editEntry.id}`, {
      title: editEntry.title,
      content: editEntry.content
    }
    ));
  }

  /*MyBlogEntries: BlogEntry[] = [
    {
      id:1,
      title: "My First Blog ",
      content:" My very wrody blog entry",
      date: new
      Date()
     }
  ,

  {
    id:2,
    title: "My Second Blog ",
    content:"Less wordy blog entry",
    date: new
    Date()
   }
];*/
  

  Sing()
  {
    alert('LALALALALALA ');
  }
}
