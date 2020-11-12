import { Component, OnInit, Sanitizer } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import {DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


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
  constructor(private auth: AuthService, private router: Router, private Sanitize: DomSanitizer) { }

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

  OnSubmitRegistrar(){
    this.auth.registrar(this.email, this.password, this.name).then(auth => {
      this.router.navigate(['iniciarsesion'])
      console.log(auth)
    }).catch(err => console.log(err))
  }

}
