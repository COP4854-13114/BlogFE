import { Component, Input, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogEntry } from '../../models/blog-entry.model';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-blogentry',
  imports: [MatCardModule, MatButtonModule,RouterModule],
  templateUrl: './blogentry.component.html',
  styleUrl: './blogentry.component.css'
})
export class BlogentryComponent {
 @Input('BlogEntry') currentBlogEntry: BlogEntry|null = null;
 constructor(private router:Router)
 {

 }
 EditBlog()
 {
   //localStorage.setItem('currentId', this.currentBlogEntry!.id.toString());
   this.router.navigate([`/editBlog/${this.currentBlogEntry?.id}`]);
 }
}
