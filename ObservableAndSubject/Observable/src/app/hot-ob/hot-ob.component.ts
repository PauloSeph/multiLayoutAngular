import { Observable, Observer } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hot-ob',
  templateUrl: './hot-ob.component.html',
  styleUrls: ['./hot-ob.component.scss']
})
export class HotObComponent implements OnInit {

  @ViewChild('myButton') button!: ElementRef

  constructor() { }

  ngOnInit(): void {

    // let myBtn: Observable<any> = fromEvent(
    //   this.button.nativeElement, 'click'
    // );

    // myBtn.subscribe(
    //   (evento) => console.log('Botão Clicado 1')
    // )

    // myBtn.subscribe(
    //   (evento) => console.log('Botão Clicado 2')
    // )


    class Producer {
      private myListener: any[] = [];
      private n = 0;
      private id: any;


      addListener(param: any) {
        this.myListener.push(param)
      }

      start() {
        this.id = setInterval( () => {
          this.n++;
          console.log('From Producer: ', this.n)

          for(let lis of this.myListener){
            lis(this.n)
          }
        }, 1000);
      }

      stop() {
        clearInterval(this.id)
      }
    }

    let producer = new Producer();

    producer.start();

    producer.addListener( (n: any) => console.log('From listener1', n))
    producer.addListener( (n: any) => console.log('From listener2', n))

    const myHotObservable = new Observable(
      (observer: Observer<number>) => {
        producer.addListener( (n: any) => observer.next(n))
      }
    );

    myHotObservable.subscribe( (n) => console.log('From listener1', n))
    myHotObservable.subscribe( (n) => console.log('From listener1', n))

  }






}
