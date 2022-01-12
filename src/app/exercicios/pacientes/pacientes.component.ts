import { Component, OnInit } from '@angular/core';
import { Pacientes } from './models/pacientes';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}


  pacientes: Pacientes = {} as Pacientes;



}
