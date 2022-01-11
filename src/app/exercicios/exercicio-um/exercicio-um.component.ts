import { Component, OnInit } from '@angular/core';

import { Student } from './models/student';

@Component({
  selector: 'app-exercicio-um',
  templateUrl: './exercicio-um.component.html',
  styleUrls: ['./exercicio-um.component.scss']
})
export class ExercicioUmComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  //Ex1
  idade: number = 0;

  aumentar() {
    this.idade++;
  }

  diminuir() {
    this.idade--;
  }

  //Ex2
  pictures = [
    'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80',
    'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  ];

  index = 0;

  next() {
    if (this.index < this.pictures.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  //Ex3
  estudante: Student = {} as Student;

  //Ex4
  arrayImagem = [''];
  addImagem(newImagem: string) {
    if (newImagem) {
      this.arrayImagem.push(newImagem);
    }
  }
}
