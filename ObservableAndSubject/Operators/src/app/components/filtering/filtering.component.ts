import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, fromEvent, from, Subject } from 'rxjs';
import { debounceTime, delay, filter, first, last, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  constructor() { }

  valoresDoInput: string = '';

  // public novas: any;

  // nova(){
  //   return from([this.valoresDoInput])
  // }

  // outros(){
  //   this.nova().pipe(
  //     debounceTime(1000)
  //   )
  //   .subscribe(v => console.log(v))
  // }

  ngOnInit(): void {
    // this.outros();
  }

  filtrando() {

    from([1, 2, 3, 4, 5])
      .pipe(
        filter(valor => valor % 2 == 1),
      )
      .subscribe(v => console.log(v))

      interval(1000).pipe(
        filter(valor => valor % 2 == 0),
        map(i => 'Value: ' + i),
        delay(1000)
      ).subscribe( i => console.log(i))
  }


  tapClick() {
    interval(1000).pipe(

      tap(i => console.warn('Antes do Filter: ', i)),
      filter(valor => valor % 2 == 0),

      tap(i => console.warn('Depois do Filter', i)),
      map(i => 'Value: ' + i),

      tap(i => console.warn('Depois do Map', i)),
      delay(1000))
    .subscribe( i => console.log(i))
  }

  outro(){

    const source = of(1, 2, 3, 4, 5)

    source.pipe(
     tap(n => {
       if (n > 3) {
         throw new TypeError(`Value ${n} is greater than 3`)
       }
     })
    )
    .subscribe(console.log);

  }

  takeClick(){
    const intervalCount = interval(1000);

    const takeFive = intervalCount.pipe(
      take(5)
      );
    takeFive.subscribe(x => console.log(x));


  }


  firstClick(){

    // const meuOb = from([1, 2, 3, 4, 5, 6]);

    // meuOb.pipe(
    //   first(valores => typeof valores === 'string', 'gatin')
    // )
    // .subscribe(v => console.error(v))

    // const source = from(['x', 'y', 'z']);
    // const example = source.pipe(last());

    // example.subscribe(val => console.log(`Ultima letra: ${val}`));

    // const source = from(['x', 'y', 'z', 2]);
    // const example = source.pipe(
    //   last(char => typeof char === 'number')
    // );

    // example.subscribe(val => console.log(`é uma string?: ${val}.`));


  }

  launchRippe() {
    const source = fromEvent(document, 'click')
    .pipe(
      debounceTime(1000)
    )
    .subscribe(e => {
      console.log('Click with DebounceTime: ', e);
    })

  }



}
