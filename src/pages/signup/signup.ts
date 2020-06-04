import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { CidadeDTO } from '../../models/cidade.dto';
import { EstadoDTO } from '../../models/estado.dto';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup
  cidades: CidadeDTO[]
  estados: EstadoDTO[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService) {

    this.formGroup = this.formBuilder.group({
      nome: ['Carlos Eduardo', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      dataNascimento: ['', [Validators.required]],
      timeQueTorce: ['', [Validators.required]],
      numeroDaCamisa: [null, [Validators.required]],
      dataDaAssociacao: ['', [Validators.required]],
      status: ['', []],
      cargo: ['', []],
      estadoId: [null, [Validators.required]],
      cidadeId: [null, [Validators.required]],
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ionViewDidLoad() {
    this.estadoService.findAll().subscribe(
      response => {
        this.estados = response;
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      });
  }

  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id).subscribe(
      response => {
        this.cidades = response;
        this.formGroup.controls.cidadeId.setValue(null);
      }, error => {});
  }

  signupPartner() {
    console.log("Enviou o form!");
  }
}
