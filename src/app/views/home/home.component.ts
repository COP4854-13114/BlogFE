import { Component } from '@angular/core';
import { BlogEntry } from '../../models/blog-entry.model';
import { BlogentryComponent } from "../../components/blogentry/blogentry.component";
import { BlogsvcService } from '../../services/blogsvc.service';

@Component({
  selector: 'app-home',
  imports: [BlogentryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  myBlogArray: BlogEntry[];
constructor(private blogSvc:BlogsvcService)
{
  this.myBlogArray = blogSvc.MyBlogEntries;
}


}
