import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userName: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    console.log("Usuario: " + this.userName);
    console.log("Password: " + this.password);
    this.navCtrl.push(InicioPage);
  }

  registrarUsuario() {
    this.navCtrl.push(RegisterPage);
    console.log("Esto funciona :D");
  }

}
