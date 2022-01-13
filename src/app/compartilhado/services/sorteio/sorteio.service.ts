import { Injectable } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  //operação diamante. Observe que eu (nomes) sou um array.
  sortear(nomes: string[]): Observable<string> {

    return new Observable((subscriber) => {

      //verificar se o array está vazio, antes de realizar o sorteio
      if(nomes.length === 1) {
        //aviso de erro se a lista estiver vazia
        subscriber.error('Lista vazia');
      } else {
        //Math.floor() => arredonda para um número inteiro, para baixo. Math.random() => número aleatório, mas não é inteiro. Por isso precisam estar associados para funcionar.
        //Math.round() => arredonda para baixo e para cima, dependendo do valor.
        const sorteado = Math.floor(Math.random() * nomes.length);

        //
        subscriber.next(nomes[sorteado]);
        subscriber.complete();
      }
    });
  }
}
