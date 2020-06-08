import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  // estaLogeado: any;
  constructor(
    // private userService:  UserService
    ) { }

  ngOnInit(): void {
    // this.estaLogeado =this.userService.isLoggedIn();
    // console.log(this.estaLogeado,'estalog')
  }

}
