import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocioService } from '../../services/domain/socio.service';

@IonicPage()
@Component({
  selector: 'page-associados',
  templateUrl: 'associados.html',
})
export class AssociadosPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public socioService: SocioService) {
  }

  ionViewDidLoad() {
    this.socioService.findAll().subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

}
