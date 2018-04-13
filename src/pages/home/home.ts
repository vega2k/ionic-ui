import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BindPage} from "../bind/bind";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  disabledSwitch = false;

  userName:any;

  constructor(public navCtrl: NavController) {
    console.log(">> Home constructor ");
  }

  items = [
    {"id":1,name:"Component"},
    {"id":2,name:"Database"},
    {"id":3,name:"세번째 Item"},
  ]

  itemSelected(item) {
    if(item.id === 1){
      this.navCtrl.push("componentPage");
    }else if(item.id === 2) {
      this.navCtrl.push("databasePage");
    }
  }

  clickButton(event) {
    alert(event.target.textContent + " " + event.clientX + " " + event.clientY);
    this.navCtrl.push("bindPage");
  }

  ionViewDidLoad() {
    console.log(">> Home ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log(">> Home  ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log(">> Home ionViewDidEnter");
  }


}
