import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BlogsvcService } from '../../services/blogsvc.service';
import { BlogEntry } from '../../models/blog-entry.model';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatTooltipModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  constructor(public blogSvc:BlogsvcService, public authSvc:AuthService)
  {
    
  }
  Singbaby()
  {
    this.blogSvc.Sing();
  }
}
