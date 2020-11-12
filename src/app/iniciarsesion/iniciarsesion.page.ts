import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  loginForm: FormGroup;
  email: string;
  password: string;
  email1:string;
  password1:string;

  constructor(private formBuilder : FormBuilder,
    private modal :ModalController,
    private authService: AuthService,
    public router: Router) {

      this.loginForm=this.formBuilder.group({
        email1 : new FormControl ("", Validators.compose([
          Validators.required,
          Validators.email
        ])),

        password1 : new FormControl ("", Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]))
      });

     }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/messenger']);
    }).catch(err => alert('Los datos son incorrectos o este usuario no existe'))
  }

}
