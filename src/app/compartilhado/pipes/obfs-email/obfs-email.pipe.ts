import { Pipe, PipeTransform } from '@angular/core';

//Crie um pipe('obfs-email') que, dado um email, ofusca o nome do usuário.
//Exemplo: {{'jose.almir@gmail.com' | obfs-email }} => 'j*********@gmail.com'

@Pipe({
  name: 'obfsEmail'
})
export class ObfsEmailPipe implements PipeTransform {

  transform(email: string) {
    //separar o email em duas partes, no caracter '@' e criar um novo array com as duas partes do email
    const [user, dominio] = email.split('@');

    //definir qual parte do array será ofuscada, initial é igual à user que recebe o valor do index 0
    const initial = user[0];

    //ofuscar com caracter '*' em todo o comprimento do usuário, menos a 1° letra
    const obfs = '*'.repeat(user.length - 1);

    return `${initial}${obfs}@${dominio}`;
  }

}
