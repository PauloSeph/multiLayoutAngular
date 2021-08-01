import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Observer, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subscription: Subscription = new Subscription()


  observableCreate() {
    const hello = new Observable(
      (observer: Observer<any>) => {
        observer.next('Hello')
        observer.next('From')
        observer.next('Observable')
        observer.complete();
      }
    )

    hello.subscribe( valor => console.log(valor));
  }

  from() {
    const source = from([1, 2, 3, 4, 5, 'string', {x: 'objeto'}])
    source.subscribe( valor => console.log(valor));

  }

  ofClick() {
    const source = of([1, 2, 3, 4, 5, 'string', {x: 'objeto'}])
    source.subscribe( valor => console.log(valor));
  }

  intervalClick() {

    const source = interval(1000);
    const valores = source.subscribe( valor => console.log(valor));

    setTimeout(() => {
      valores.unsubscribe()
    }, 5000);
  }


  timeClick() {

    const source = timer(3000, 1000);
    const valores = source.subscribe( valor => console.log(valor));

    this.subscription.add(valores)
  }

  unsubscribeClick() {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }


  fromEventClick() {
    const source = fromEvent(document, 'click')
    .subscribe( (e) => console.log(e))
    this.subscription.add(source)
  }



}


