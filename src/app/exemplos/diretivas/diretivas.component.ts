import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {
  //ngIf
  oculto: boolean = false;
  ocultar() {
    this.oculto = true;
  }

  //ngFor
  compras = ['Arroz', 'Feijão', 'Azeite'];

  alimento: string = '';
  add() {
    if(this.alimento.length > 0) {
      this.compras.push(this.alimento);
      this.alimento = ''; //para limpar o campo após a incersão do anterior
    } else {
      alert('Entrada Invalida!')
    }
  }

  //ngSwitch
  status: string = 'loading';

  constructor() { }

  ngOnInit(): void {}

}
