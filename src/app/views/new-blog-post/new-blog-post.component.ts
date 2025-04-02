import { Component } from '@angular/core';
import { NewentryComponent } from "../../components/newentry/newentry.component";
import { BlogEntry } from '../../models/blog-entry.model';
import { BlogsvcService } from '../../services/blogsvc.service';

@Component({
  selector: 'app-new-blog-post',
  imports: [NewentryComponent],
  templateUrl: './new-blog-post.component.html',
  styleUrl: './new-blog-post.component.css'
})
export class NewBlogPostComponent {
  myBlogArray: BlogEntry[];
  constructor(private blogSvc:BlogsvcService)
  {
    this.myBlogArray = blogSvc.MyBlogEntries;
  }
  AddBlog(newBlog:BlogEntry)
  {
    this.myBlogArray.push(newBlog);
  }
}
