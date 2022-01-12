import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExerciciosRoutingModule } from './exercicios-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';



@NgModule({
  declarations: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ExerciciosRoutingModule
  ],
  exports: [
    ExercicioUmComponent,
    ExercicioDoisComponent,
    PacientesComponent
  ]
})
export class ExerciciosModule { }
