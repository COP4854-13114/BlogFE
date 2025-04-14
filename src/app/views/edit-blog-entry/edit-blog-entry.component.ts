import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BlogEntry } from '../../models/blog-entry.model';
import { FormsModule } from '@angular/forms';
import { BlogsvcService } from '../../services/blogsvc.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-blog-entry',
  imports: [RouterModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule,MatIconModule,FormsModule],
  templateUrl: './edit-blog-entry.component.html',
  styleUrl: './edit-blog-entry.component.css'
})
export class EditBlogEntryComponent {

  editBlogEntry: BlogEntry = {
    id: 0,
    title: '',
    content: '',
    date: new Date()
  };

  constructor( private blogSvc: BlogsvcService, private route:Router, private activatedRuoute:ActivatedRoute) {
    //const currentId = localStorage.getItem('currentId');
    const currentId= this.activatedRuoute.snapshot.paramMap.get('id');
    if (currentId) {
      let fundEntry =this.blogSvc.BlogSignal().find((entry) => entry.id === parseInt(currentId))
      if(fundEntry)
      {
        this.editBlogEntry = fundEntry;
      }
  }
}
}
