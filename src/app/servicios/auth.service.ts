import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Router } from "@angular/router";
import { audit } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{

      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));

    });
  }

  out(){
    this.AFauth.signOut().then(() => {
      this.router.navigate(['iniciarsesion']);
    })
  }
}
