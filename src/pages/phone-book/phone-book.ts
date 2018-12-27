import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  constactArray = [
    {name: 'Nena', telephone: '0829942698', imageUrl: 'assets/imgs/00.jpg'}
    ,{name: 'Lisa', telephone: '0829942698', imageUrl: 'assets/imgs/000.jpg'}
    ,{name: 'Ros', telephone: '0829942698', imageUrl: 'assets/imgs/0000.jpg'}
    ,{name: 'Hanny', telephone: '0829942698', imageUrl: 'assets/imgs/00000.jpg'}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}//end class
