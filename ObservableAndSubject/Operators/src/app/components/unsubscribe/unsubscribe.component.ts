import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {


  public subscriptionActive = false;
  private subscription: Subscription[] = [];
  private unsbusbscribeAll: Subject<any> = new Subject();


  private intervalSubscription: Subscription;

  constructor(intervalSub: Subscription) {
    this.intervalSubscription = intervalSub
   }

  ngOnInit(): void {
  }


  checkSubscriptions() {
    this.intervalSubscription = interval(100).subscribe(() => {
      let active = false;
      this.subscription.forEach((s) => {
        if (s.closed) {
          active = true
        }
      })
      this.subscriptionActive = active;
    })
  }

  public subscribe() {

    const subscription1 = interval(100)
    .pipe(
      takeUntil( this.unsbusbscribeAll )
    )
    .subscribe((valores) => {
      console.log(valores)
    })


    const subscription2 = fromEvent(document, 'mousemove')
    .pipe(
      takeUntil( this.unsbusbscribeAll )
    )
    .subscribe((event) => {
      console.log(event)
    })

    this.subscription.push(subscription1)
    this.subscription.push(subscription2)
  }


  unsubscribe() {
    this.unsbusbscribeAll.next();
  }

  ngOnDestroy() {
    if(this.intervalSubscription != null) {
      this.intervalSubscription.unsubscribe()
    }
  }
}

