import { Observable, of, throwError, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError, map, retry, retryWhen, tap, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startTest()
  }

  startTest() {

    let obj: Observable<any> = new Observable(
      (observer) => {
        for (let i = 0; i < 10; i++) {
          if (i == 7) {
            observer.error(`Erro ocorreu em: ' ${i}`)
          } else {
            observer.next(i)
          }
        }
      }
    )

    obj.pipe(
      map( i => i * 10),
      tap( valor => console.log(valor)),
      catchError(error => {
        console.error(error);
        // return of(0);
        return throwError('Lançando um erro do Pipe')
      }),
      // retry(2),
      retryWhen(i => timer(5000))
    )
    .subscribe(
      valor => console.log(valor),
      erro => console.log(`Erro: ${erro}`),
      () => console.log('Complete')
    )


    let obj2: Observable<any> = new Observable((observer => {
      timer(2000).subscribe( valor => observer.next(1000));
      timer(2500).subscribe( valor => observer.complete());
    }))


    obj2.pipe(
      timeout(2400)
    )
    .subscribe(
      valor => console.log(valor),
      erro => console.log(`Erro: ${erro}`),
      () => console.log('Complete')
    )
  }
}
