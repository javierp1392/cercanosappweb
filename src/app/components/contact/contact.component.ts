import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public enviado = false;

  constructor(public afAuth: AngularFireAuth, private fun: AngularFireFunctions, public  formBuilder: FormBuilder, private userService:  UserService) {
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
 
    this.contactForm = formBuilder.group({
      nombre: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      email:  ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      tema: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      mensaje: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      // phone: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      // password:  ['', Validators.compose([Validators.minLength(6), Validators.required])],
  //['', Validators.compose([Validators.required])]
    });
   }

  enviarFormulario(){
    console.log("call enviaar formulario");
    if (!this.contactForm.valid){
      console.log(this.contactForm.value);
      console.log("invalid form")
      alert("el formulario esta incompleto");
      //this.presentAlert("invalid form");
    } else {
      console.log(this.contactForm.value);
      console.log("yes, ")
       // tslint:disable-next-line: align
       this.userService.FormularioContacto(
         this.contactForm.value
        // this.contactForm.value.nombre, 
        // this.contactForm.value.email, 
        // this.contactForm.value.tema, 
        // this.contactForm.value.mensaje
        //  let docData 
        // this.registerForm.value.idccnit, 
        // this.registerForm.value.firstname, 
        // this.registerForm.value.lastname,
        // this.registerForm.value.nomtienda,
        // this.registerForm.value.phone,
        // this.registerForm.value.username, 
        // this.registerForm.value.password
        )
        this.enviado = true;
        console.log(this.contactForm.value)
        

  }
}
  
  sendEmail() {
    const callable = this.fun.httpsCallable('genericEmail');
    callable({ text: 'Sending email with Angular and SendGrid is fun!',
    subject: 'Email from Angular'}).subscribe();
  }

  ngOnInit(): void {
  }

}
