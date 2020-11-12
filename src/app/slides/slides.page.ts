import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private router:Router, private storage:Storage) {
    this.storage.get('mostrarIntro').then((result)=> {

      if(result == false)
      {
        this.router.navigateByUrl('/home');
      }      
    });

    this.storage.set('mostrarIntro', false);
    
   }
 
  ngOnInit() {
  }



}
