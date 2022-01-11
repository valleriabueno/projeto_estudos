import { Component, OnInit } from '@angular/core';

import { Student } from './models/student';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  estudante: Student = {} as Student;

  nomeCompleto = '';
  nome = 'Valéria';
  idade = 36;
  link = 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

  alerta() {
    alert("Seja bem-vindo(a)!");
  }

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
  }
}
