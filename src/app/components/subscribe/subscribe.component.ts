import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-subscribe',
  templateUrl:'./subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  public subscribeForm: FormGroup;
  public enviado = false;

  constructor(public  formBuilder: FormBuilder, private userService:  UserService) {
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
 
    this.subscribeForm = formBuilder.group({
      // nombre: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email:  ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      // tema: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      mensaje: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
   }

   enviarFormulario(){
    console.log("call enviaar formulario");
    if (!this.subscribeForm.valid){
      console.log(this.subscribeForm.value);
      console.log("invalid form")
      alert("el formulario esta incompleto");
      //this.presentAlert("invalid form");
    } else {
      console.log(this.subscribeForm.value);
      console.log("yes, ")
       // tslint:disable-next-line: align
       this.userService.formularioSubscribe(
         this.subscribeForm.value
        )
      this.enviado = true;
        // tslint:disable-next-line: align
        console.log(this.subscribeForm.value)
        

  }
}

  ngOnInit(): void {
  }

}
