import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Component({
  selector: 'app-qualquer',
  templateUrl: './qualquer.component.html',
  styleUrls: ['./qualquer.component.scss']
})
export class QualquerComponent implements OnInit {


  observable$ = new Observable<number>(subscriber => {
    subscriber.next(Math.floor(Math.random() * 200) + 1);
  });

  subject$ = new Subject();

  ngOnInit() {
    this.observable$.subscribe(val => {
      console.log("Obs1 :" + val);
    });

    this.observable$.subscribe(val => {
      console.log("Obs2 :" + val);
    });

    this.subject$.subscribe(val => {
      console.log("Sub1 " + val);
    });
    this.subject$.subscribe(val => {
      console.log("Sub2 " + val);
    });

    this.subject$.next(Math.floor(Math.random() * 200) + 1);
  }
}


