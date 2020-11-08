import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email : string;
  public password: string;
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegistrar(){
    this.auth.registrar(this.email, this.password).then(auth => {
      this.router.navigate(['iniciarsesion'])
      console.log(auth)
    }).catch(err => console.log(err))
  }

}
