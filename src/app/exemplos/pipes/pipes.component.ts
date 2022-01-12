import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  date = new Date();
  nome = 'Valéria Bueno';
  percentual = 0.557564;
  salario = 3000;
  user = ['Valéria', 'Bueno', 1]




  constructor() { }

  ngOnInit(): void {}
}
