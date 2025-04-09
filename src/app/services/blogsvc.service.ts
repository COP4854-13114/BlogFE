import { Injectable, signal } from '@angular/core';
import { BlogEntry } from '../models/blog-entry.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsvcService {

  BlogSignal = signal<BlogEntry[]>([]);

  constructor()
  {
    this.RetreiveBlogEntriesFromStorage();
  }

  AddBlogEntry(newEntry:BlogEntry){
    const currentEntries = this.BlogSignal();
    const newEntries = [...currentEntries, newEntry];
    this.BlogSignal.set(newEntries);
  }

  SaveBlogEntriesToStorage(){
    const currentBlogEntries = this.BlogSignal();
    localStorage.setItem('MyBlogData', JSON.stringify(currentBlogEntries));
  }

  RetreiveBlogEntriesFromStorage()
  {
    let stringBlogEntries = localStorage.getItem('MyBlogData');
    if(stringBlogEntries)
    {
      let blogEntries: BlogEntry[] = JSON.parse(stringBlogEntries);
      this.BlogSignal.set(blogEntries);
    }
    
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
