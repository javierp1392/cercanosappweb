import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-one',
  templateUrl: './pricing-one.component.html',
  styleUrls: ['./pricing-one.component.css']
})
export class PricingOneComponent implements OnInit {
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
