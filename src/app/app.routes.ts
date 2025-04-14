import { Routes } from '@angular/router';
import { NewBlogPostComponent } from './views/new-blog-post/new-blog-post.component';
import { HomeComponent } from './views/home/home.component';
import { EditBlogEntryComponent } from './views/edit-blog-entry/edit-blog-entry.component';

export const routes: Routes = [
    {
        path:'', component: HomeComponent
    },
    {
        path:'newblog', component: NewBlogPostComponent
    },
    {
        path:'editBlog/:id', component: EditBlogEntryComponent
    }
];
