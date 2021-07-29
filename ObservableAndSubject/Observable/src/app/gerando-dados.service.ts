import { ConnectableObservable, Observable } from 'rxjs';
import { publish, timestamp } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { DataModel } from './dataModel';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerandoDadosService {

  public dataObservable: ConnectableObservable<DataModel>

  constructor() {
    this.dataObservable = new Observable(

      //Dados sendo gerados
      (observer: Observer<DataModel>) => {
        let n = 0;
        console.log('Fui criado')

        let f = () => {
          n++;
          if (n <= 10) {
            let timeStamp = Math.random() * 2000 + 500;
            observer.next({timestamp: timeStamp, data: n });
            setTimeout(f, timeStamp)
          } else {
            observer.complete();
          }
        }
      }
    ).pipe(publish()) as ConnectableObservable<DataModel>



  }
}
