import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.observableCreate()
  }


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

}


