import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private storage:Storage) {
    this.storage.get('mostrarIntro').then((result)=> {

      if(result == null){  

        this.router.navigateByUrl('/slides');   
        
      }     
    });
    
  }

}
