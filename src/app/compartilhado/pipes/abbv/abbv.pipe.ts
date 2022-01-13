import { Pipe, PipeTransform } from '@angular/core';

//Crie um pipe('abbv') que recebe o nome de uma pessoa e abrevia.
//Exemplo: {{ ' José Almir de Souza Gomes Júnior' | abbv }} => José A.

@Pipe({
  name: 'abbv'
})
export class AbbvPipe implements PipeTransform {

  transform(completo: string) {

    const [nome, sobrenome] = completo.split(' ');


  }

}
