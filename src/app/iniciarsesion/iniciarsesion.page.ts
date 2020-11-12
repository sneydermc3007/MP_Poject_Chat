import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { ModalController, AlertController } from "@ionic/angular";


@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  email: string;
  password: string;
  email1:string;
  password1:string;

  constructor(
    private modal :ModalController,
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/messenger']);
    }).catch(err => alert('Los datos son incorrectos o este usuario no existe'))
  }

}
