import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { delay, map } from 'rxjs/operators'

@Component({
  selector: 'app-op-transform',
  templateUrl: './op-transform.component.html',
  styleUrls: ['./op-transform.component.scss']
})
export class OpTransformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  mapClick() {

    from([1, 2, 3, 4, 5])
    .pipe(
      map(valor => 'Numeros: ' + valor),
      delay(1000)
    )

    .subscribe( i => console.log(i));

    fromEvent(document, 'click')
    .pipe(
     map( function (e: any) {
       return {x: e.screenX, y: e.screenY}
     })
    )
    .subscribe( e => console.log(e))
  }
}
