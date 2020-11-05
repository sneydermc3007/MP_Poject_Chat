import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }

  Onlogout(){
    this.authservice.out();
  }

}
