import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotob-subject',
  templateUrl: './hotob-subject.component.html',
  styleUrls: ['./hotob-subject.component.scss']
})
export class HotobSubjectComponent implements OnInit {


  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  public myObservable!: Observable<number>;


  constructor() { }

  ngOnInit(): void {

    this.myObservable = new Observable(
      (observer: Observer<number>) => {
        let i: number = 0;
        setInterval(() => {
          i++
          (i == 100) ? observer.complete() : observer.next(i);
        }, 1000)
      }
    )

    this.usingShare();
  }

  usingShare() {
    const multicasted = this.myObservable.pipe(share())

    multicasted.subscribe((n) => console.log(n))
    multicasted.subscribe((n) => console.log(n))
  }



  usingPublish() {
    const multicasted: ConnectableObservable<number> = this.myObservable.pipe(
      publish()) as ConnectableObservable<number>;
    multicasted.connect();

    multicasted.subscribe((n) => console.log(n))
    multicasted.subscribe((n) => console.log(n))
  }

  usingSubjects() {
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject);

    subject.subscribe((n) => {
      console.log(n)
    })

    subject.subscribe((n) => {
      console.log(n + 1)
    })
  }
}
function publish(): import("rxjs").OperatorFunction<number, unknown> {
  throw new Error('Function not implemented.');
}

function refCount(): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

function share(): import("rxjs").OperatorFunction<number, unknown> {
  throw new Error('Function not implemented.');
}

