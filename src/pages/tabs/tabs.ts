import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { SoportePage } from '../soporte/soporte';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;

  constructor() {

    this.tab1 = InicioPage;
    this.tab2 = EstadisticasPage;
    this.tab3 = SoportePage;
    this.tab4 = HomePage;
    this.tab5 = RegisterPage;

  }

  

}
