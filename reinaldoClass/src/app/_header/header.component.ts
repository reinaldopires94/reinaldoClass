import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated!: boolean;
  userSubs!: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userSubs =  this.auth.isUserLogin.subscribe(user => {
     this.isAuthenticated = user ? true : false;// vendo se estou Autenticado
      console.log(this.isAuthenticated);
    })
  }


  logOut(){
   this.auth.logOut();
   this.isAuthenticated = !this.isAuthenticated;
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }
}
