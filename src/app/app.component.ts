import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BlogentryComponent } from "./components/blogentry/blogentry.component";
import { BlogEntry } from './models/blog-entry.model';
import { NewentryComponent } from "./components/newentry/newentry.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BlogentryComponent, NgFor, NewentryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstBlog';
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

AddBlog(newBlog:BlogEntry)
{
  this.MyBlogEntries.push(newBlog)
}
  
}
