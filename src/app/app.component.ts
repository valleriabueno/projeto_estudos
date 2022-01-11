import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*
  //dados foram movidos para data-binding.component.ts
  nome = 'Valéria';
  idade = 36;

  linkImagem = 'https://h5q4a2e9.stackpathcdn.com/wp-content/uploads/2016/08/balos-beach-1.jpg'

  larguraImagem = 30;
  alturaImagem = 30;

  // Função para calcular idade
  calculaAnoNascimento(): number {
    const today = new Date();

    return today.getFullYear() - this.idade;
  }

  aumentar() {
    this.larguraImagem += 20;
    this.alturaImagem += 15;
  }

  diminuir() {
    this.larguraImagem -= 20;
    this.alturaImagem -= 15;
  }*/
}
