import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  nombre: string;
  apellidos: string;
  username: string;
  password: string;
  repetirPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registrar() {

    if (this.nombre.length == 0 ||this.username.length == 0 || this.apellidos.length == 0 || this.password.length == 0 || this.password.length == 0) {
      alert('Es necesario llenar el formulario');
    }
    
    console.log(this.nombre);
    console.log(this.apellidos);
    console.log(this.username);
    console.log(this.password);
    console.log(this.repetirPassword);
    
    this.navCtrl.push(HomePage);
    
  }

}
