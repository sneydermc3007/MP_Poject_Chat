import { Component, OnInit, Sanitizer } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import {DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email : string;
  public password: string;
  public name: string;
  
 imagenUsuario ="assets/img/login.png"; 
 foto: SafeResourceUrl;
  constructor(private auth: AuthService, private router: Router, private Sanitize: DomSanitizer, public alertController: AlertController) { }

  ngOnInit() {
  }



  async tomarFoto(){
    const imagen= await Plugins.Camera.getPhoto({
      quality:100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,


    });

    this.foto = this.Sanitize.bypassSecurityTrustResourceUrl(imagen && imagen.dataUrl);


  }
  async presentAlertRegistro() {//Incorrecto
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Fallo en el registro',
      subHeader: 'Mal ingreso de datos',
      message: 'Revise los campos, gracias por su atencion',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertRegistroR() {//Correcto 
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenido al CHAT',
      subHeader: 'Familia Amigoniana',
      message: 'Disfruta, Vive la experiencia compartiendo con docentes, compañeros y directivos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  OnSubmitRegistrar(){
    this.auth.registrar(this.email, this.password, this.name).then(auth => {
      this.router.navigate(['iniciarsesion'])
      console.log(auth)
      this.presentAlertRegistroR()
    }).catch(err => this.presentAlertRegistro())
  }
  
}
