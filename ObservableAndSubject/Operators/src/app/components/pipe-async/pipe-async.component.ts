import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { delay, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.scss']
})
export class PipeAsyncComponent implements OnInit {


  public options!: Observable<string[]> ;

  constructor() { }

  ngOnInit(): void {

    this.options = new Observable(
      (ob) => {
        for(let i = 0; i < 10; i++){
          ob.next(`Minhas opçoes são: ${i}`)
        }
        ob.complete()
      }
     ).pipe(
       map( (s) => s + ''),
       toArray(),
       delay(2000)
     )

     this.options.subscribe(
       valor => console.log(valor)
     )

  }



}
