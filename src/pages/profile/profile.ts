import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { SocioDTO } from '../../models/socio.dto';
import { SocioService } from '../../services/domain/socio.service';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  socio: SocioDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public socioServie: SocioService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.username) {
      this.socioServie.findByUsername(localUser.username).subscribe(
        response => {
          this.socio = response;
          this.getImageIfExists();
        }, error => {
          if(error.status == 403) {
            this.navCtrl.setRoot('HomePage');
          }
        });
    } else {
      console.log("Passou aqui!")
      this.navCtrl.setRoot('HomePage');
    }
  }

  getImageIfExists() {
    this.socioServie.getImageFromBucket(this.socio.id).subscribe(
      response => {
        this.socio.imageUrl = `${API_CONFIG.bucketBaseUrl}/part${this.socio.id}.jpg`
      }, error => {});
  }
}
