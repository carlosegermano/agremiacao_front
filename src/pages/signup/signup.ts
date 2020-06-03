import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      nome: ['Carlos Eduardo', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      dataNascimento: ['', [Validators.required]],
      timeQueTorce: ['', [Validators.required]],
      numeroDaCamisa: [null, [Validators.required]],
      dataDaAssociacao: ['', [Validators.required]],
      status: ['', []],
      cargo: ['', []],
      cidadeId: [null, [Validators.required]],
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  signupPartner() {
    console.log("Enviou o form!");
  }
}
