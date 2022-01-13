import { Component, OnInit } from '@angular/core';

import { SorteioService } from './../../compartilhado/services/sorteio/sorteio.service';

@Component({
  selector: 'app-app-sorteio',
  templateUrl: './app-sorteio.component.html',
  styleUrls: ['./app-sorteio.component.scss']
})
export class AppSorteioComponent implements OnInit {

  values: string = '';
  sorteado: string = '';

  enviar() {
    // split('\n) vai dividir todos os valores injetados usando o enter como parâmetro de separação
    const nomes = this.values.split('\n');
    this.sorteioService.sortear(nomes).subscribe({
      next: (nome) => (this.sorteado = nome),
      error: (err) => alert(err),
      complete: () => console.log("Observeble chegou ao fim!")
    })

  }


  constructor(private sorteioService: SorteioService) { }

  ngOnInit(): void {
  }

}
