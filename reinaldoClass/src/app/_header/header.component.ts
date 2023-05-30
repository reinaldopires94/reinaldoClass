import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  userSubs!: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userSubs =  this.auth.isUserLogin.subscribe(user => {
     this.isAuthenticated = user ? true : false;// vendo se estou Autenticado
      console.log('isAuthenticated: ',this.isAuthenticated, 'User: ', user);
    })
  }


  logOut(){
   this.auth.logOut();
  }

  ngOnDestroy(): void {
    //this.userSubs.unsubscribe();
  }
}
