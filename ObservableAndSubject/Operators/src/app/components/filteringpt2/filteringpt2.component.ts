import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { map, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-filteringpt2',
  templateUrl: './filteringpt2.component.html',
  styleUrls: ['./filteringpt2.component.scss']
})
export class Filteringpt2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.takeWhileClick()
  }

  takeWhileClick() {
    interval(500)
      .pipe(
        takeWhile((valor, indice) => valor < 5)
      )
      .subscribe(
        (i) => console.log(i),
        (error) => console.log(error),
        () => console.log('Completed')
      )
  }

  takeUntilSearch() {

    let dueTime$ = timer(5000)

    interval(1000)
    .pipe(
      takeUntil(dueTime$)
    )
    .subscribe(
      (i) => console.log(i),
      (error) => console.log(error),
      () => console.log('Completed')
    )
  }


  teste() {
  const source = interval(1000);

  const clicks = fromEvent(document, 'click');
  const result = source.pipe(takeUntil(clicks));
  result.subscribe(x => console.log(x));
  }
}
