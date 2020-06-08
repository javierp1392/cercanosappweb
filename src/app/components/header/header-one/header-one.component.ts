import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})

export class HeaderOneComponent implements OnInit {
  estaLogeado: any;
  userAuth: boolean = false; // Is user logged in ?
  userId: any;

  constructor(public userService:  UserService) { 
    this.userService.getConnectedUserId();
  }

  ngOnInit(): void {
    this.userAuth = this.userService.getAuthState();
    console.log(('this.userAuth'),this.userAuth);
    this.userId = this.userService.getUserId();
    console.log(('this.userId'),this.userId);
    
  }
  cerrarsesion() {
    this.userService.signoutUser();
  }
  }


