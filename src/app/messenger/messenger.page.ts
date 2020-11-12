import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { ChatsService, chat } from "../servicios/chats.service";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";
import { ActionSheetController } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage implements OnInit {

  public chatRooms : any = [];


  
  constructor( 
    private browser: InAppBrowser,
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

  sistemAcademico(){
    this.browser.create("https://academia.funlam.edu.co/uenlinea/index.jsf", '_self')
  }

  campusVirtual(){
    this.browser.create("https://virtual.ucatolicaluisamigo.edu.co/campus/", '_self')
  }

  openChat(chat){
    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat: chat
      }
    }).then((modal) => modal.present())
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
        }
      },{
        text: 'Sistema Academico',
        icon: 'cloud-upload-outline',
        handler: () => {
          this.sistemAcademico()
        }
      },{
        text: 'Campus Virtual',
        icon: 'earth-outline',
        handler: () => {
          this.campusVirtual()
        }
      },]
    });
    await actionSheet.present();
  }

}
