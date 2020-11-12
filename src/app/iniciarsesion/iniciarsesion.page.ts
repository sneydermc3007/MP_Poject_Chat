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

  constructor(
    public alertController: AlertController,
    private modal :ModalController,
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {//INCORRECTO
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Mal ingreso de los datos',
      message: 'Los datos colocados son invalidos, gracias por su atencion.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/messenger']);
    }).catch(err => this.presentAlert())
  }

}
