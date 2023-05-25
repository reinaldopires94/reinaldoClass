import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  logOut(){
   this.router.navigateByUrl('/');
   this.isAuthenticated = !this.isAuthenticated;
  }
}
