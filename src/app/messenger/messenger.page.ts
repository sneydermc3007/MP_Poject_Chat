import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ChatsService, chat } from "../servicios/chats.service";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";
import { ActionSheetController } from '@ionic/angular';
import {  Geolocation  } from "@capacitor/core";


@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {

  public chatRooms : any = [];


  latitud = "Pendiente";
  longitud = "Pendiente";

  constructor(
    public authservice: AuthService,
    public chatservice: ChatsService,
    private modal: ModalController,
    public actionSheetController: ActionSheetController) { }

  Onlogout(){
      this.authservice.out();
    }

  ngOnInit() {
    this.chatservice.getChatRooms().subscribe(chats => {
      this.chatRooms = chats;
    })
  }

  openChat(chat){
    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat: chat
      }
    }).then( (modal) => modal.present())
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Desconectarme',
        role: 'destructive',
        icon: 'hand-left-outline',
        handler: () => {
          this.Onlogout()
        },
      }]
    });
    await actionSheet.present();
  }

  async calcularPosicion(){

    const coordenadas = await Geolocation.getCurrentPosition();
    this.longitud =coordenadas.coords.longitude.toString();
    this.latitud =coordenadas.coords.latitude.toString();

  }

}
