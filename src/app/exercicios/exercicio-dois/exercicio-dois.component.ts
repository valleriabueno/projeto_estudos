import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-dois',
  templateUrl: './exercicio-dois.component.html',
  styleUrls: ['./exercicio-dois.component.scss']
})
export class ExercicioDoisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  //EX 1
  idade: number = 0;

  aumentar() {
    this.idade++;
  }

  diminuir() {
    this.idade--;
  }

  //EX 2
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
}
