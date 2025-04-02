import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BlogsvcService } from '../../services/blogsvc.service';
import { BlogEntry } from '../../models/blog-entry.model';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatTooltipModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  myBlogArray: BlogEntry[];
  constructor(private blogSvc:BlogsvcService)
  {
    this.myBlogArray = blogSvc.MyBlogEntries;
  }
  Singbaby()
  {
    this.blogSvc.Sing();
  }
}
