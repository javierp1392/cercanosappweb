import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/storage';

import { UserService } from '../../../shared/services/user.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'firebase';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm: FormGroup;
  
  constructor(
  
    private router: Router,
    private userService:  UserService,
    //****** form validation ********//
    public  formBuilder: FormBuilder
  ){ 
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
 
    this.registerForm = formBuilder.group({
      idccnit: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      nomtienda: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      phone: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      username:  ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password:  ['', Validators.compose([Validators.minLength(6), Validators.required])],
  //['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }
  submitFormTest(){
    if (!this.registerForm.valid){
      console.log(this.registerForm.value);
      //this.presentAlert("invalid form");
      console.log("invalid form")
    } else {
      console.log(this.registerForm.value);
      console.log("yes, ")
      //this.userService.loginUser()
    }
  }

  
  async registerUser(){
    console.log("call signopUser");
    if (!this.registerForm.valid){
      console.log(this.registerForm.value);
      console.log("invalid form")
      //this.presentAlert("invalid form");
    } else {
      console.log(this.registerForm.value);
      console.log("yes, ")
      await this.userService.signupUserAsociado(
        this.registerForm.value.idccnit, 
        this.registerForm.value.firstname, 
        this.registerForm.value.lastname,
        this.registerForm.value.nomtienda,
        this.registerForm.value.phone,
        this.registerForm.value.username, 
        this.registerForm.value.password
        )
        .then(() => {
          this.router.navigateByUrl('ingreso-usuario');
          //loadingPopup.dismiss();
          //this.nav.setRoot('AfterLoginPage');
        }, (error) => { 
          console.log("error mensaje")
          
          alert("El usuario ya se encuentra registrado");
          
          //  var errorMessage: string = error.message;
          
        });
        
      }
      
    }
  
  }
