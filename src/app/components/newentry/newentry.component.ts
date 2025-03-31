import { Component, EventEmitter, Output } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BlogEntry } from '../../models/blog-entry.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-newentry',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule,MatIconModule,FormsModule],
  templateUrl: './newentry.component.html',
  styleUrl: './newentry.component.css'
})
export class NewentryComponent {

@Output('NewBlogAdded') NewBlogAdded = new EventEmitter<BlogEntry>();  

 newBlogEntry: BlogEntry = {
  id: new Date().getTime(),
  title: '',
  content: '',
  date: new Date()
 }

 AddBlog()
 {
  this.NewBlogAdded.emit(this.newBlogEntry);
  this.newBlogEntry = {
    id: new Date().getTime(),
    title: '',
    content: '',
    date: new Date()
  }
 }
}
