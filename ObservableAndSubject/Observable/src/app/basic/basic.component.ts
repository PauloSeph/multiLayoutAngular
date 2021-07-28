import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {



  subscription1?: Subscription;
  subscription2?: Subscription;


  n1: number = 0;
  n2: number = 0;

  s1: string = '';
  s2: string = '';

  constructor() { }



  ngOnInit(): void {
    // Async
    const socket = new WebSocket('ws://someurl');

    const source = new Observable((observer) => {
      socket.addEventListener('message', (e) => observer.next(e));
    });



    const intervalo = new Observable(
      (observer: Observer<any>) => {

        let i: number = 0;

        let intervalo = setInterval(() => {
          i++;
          console.log('Do Observable: ', i)

          if (i == 10) {
            observer.complete();
          } else if (i % 2 == 0) {
            observer.next(i);
          }
        }, 1000);
        return () => {
          clearInterval(intervalo)
        };
      });


     this.subscription1 = intervalo.subscribe(
       (valores) => { this.n1 = valores   },
       (error) => { this.s1 = 'Error: ' + error},
       () => { this.s1 = 'Completed'}
     )

      this.subscription2 = intervalo.subscribe(
        (valores) => { this.n1 = valores   },
        (error) => { this.s1 = 'Error: ' + error},
        () => { this.s1 = 'Completed'}
      )

      setTimeout(() => {
        this.subscription1?.unsubscribe();
        this.subscription2?.unsubscribe();
      }, 11000);


      const firstObservable = new Observable(
        (observer: Observer<number>) => {
          observer.next(120);
          observer.next(110);
          observer.next(100);
          setTimeout(() => {
            observer.next(150);
            observer.complete()
          }, 3000);
        }
      )

      firstObservable.subscribe( (dados) => {
        console.log(dados)
      })

  }



}

