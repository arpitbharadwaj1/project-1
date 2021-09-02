import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from '../services/alretify.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  opened = true;

  over!: 'over';
  constructor( private alertify: AlertifyService,private router: Router,private authService: AuthService) { }

  ngOnInit() {
    //this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  loggedIn() {
    return localStorage.getItem('token');
  }
}

