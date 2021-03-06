import { Component } from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams,
  Platform, ToastController
} from 'ionic-angular';
import {LoadingProvider} from "../../providers/loading/loading";
import {AccountInterface} from "../../interfaces/account";

/**
 * Generated class for the ComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'componentPage'})
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {
  private accountData = {} as AccountInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public platform: Platform,
              public modalCtrl:ModalController,
              public alertCtrl:AlertController,
              public toastCtrl:ToastController,
              public loadingCtrl:LoadingController,
              public loadingProvicer:LoadingProvider
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  actionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            alert('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            alert('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            alert('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            alert('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            alert('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  modal() {
    let modal = this.modalCtrl.create("modalPage");
    modal.onDidDismiss(data => {
      console.log(data);
    })
    modal.present();
  }

  slide() {
    this.navCtrl.push("slidePage");
  }

  promptAlert() {
    let prompt = this.alertCtrl.create({
      title:'Login',
      message:"이름과 E메일을 입력하세요",
      inputs:[
        {name:'name',placeholder:'Name 입력'},
        {name:'email',placeholder:'Email 입력'}
      ],
      buttons:[
        {text:'취소',handler: data => {console.log('Cancel Clicked '+ data)}},
        {text:'저장',handler: data => {
            this.accountData = {name:data.name,email:data.email}
            this.navCtrl.push('navPage',{account:this.accountData});
          }}
      ]
    });
    prompt.present();
    console.log(this.accountData);
  }

  toast() {
    let toast = this.toastCtrl.create({
      message:'3초 동안 보였다가 사라집니다',
      duration:3000,
      position:'top',
    });
    toast.present();
  }

  loading() {
    // let loading = this.loadingCtrl.create({
    //   content:'잠시만 기다려주세요...'
    // });
    //
    // loading.present();
    //
    // setTimeout(() =>{
    //   loading.dismiss();
    // },3000);

    this.loadingProvicer.show();

    setTimeout(() => {
      this.loadingProvicer.hide()
    },3000);
  }
}
