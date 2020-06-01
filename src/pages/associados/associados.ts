import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocioService } from '../../services/domain/socio.service';
import { SocioDTO } from '../../models/socio.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-associados',
  templateUrl: 'associados.html',
})
export class AssociadosPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: SocioDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public socioService: SocioService) {
  }

  ionViewDidLoad() {
    this.socioService.findAll().subscribe(
      response => {
        this.items = response;
      }, error => {});
  }

}
