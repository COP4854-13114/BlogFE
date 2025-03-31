import { Component, Input, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BlogEntry } from '../../models/blog-entry.model';
@Component({
  selector: 'app-blogentry',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './blogentry.component.html',
  styleUrl: './blogentry.component.css'
})
export class BlogentryComponent {
 @Input('BlogEntry') currentBlogEntry: BlogEntry|null = null;
}
