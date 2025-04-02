import { Injectable } from '@angular/core';
import { BlogEntry } from '../models/blog-entry.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsvcService {

  MyBlogEntries: BlogEntry[] = [
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
];
  constructor() { }

  Sing()
  {
    alert('LALALALALALA ');
  }
}
