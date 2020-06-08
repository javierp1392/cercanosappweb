import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-two',
  templateUrl: './pricing-two.component.html',
  styleUrls: ['./pricing-two.component.css']
})
export class PricingTwoComponent implements OnInit {
precio = true;

onClickMe(){
  console.log(this.precio);
  this.precio = true;
  console.log(this.precio);
}
onClickMi(){
  console.log(this.precio);
  this.precio = false;
  console.log(this.precio);
}
  constructor() { }


  ngOnInit(): void {
  }

}
