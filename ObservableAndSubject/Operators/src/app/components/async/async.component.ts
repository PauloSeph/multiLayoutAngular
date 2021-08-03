import { Observable, Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';


export interface User {
  login: string;
  name: string;
}

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {


  public user!: Observable<User>;

  constructor() { }


  ngOnInit(): void {
    this.user = new Observable<User>(
      (observer: Observer<User>) => {
        let names = ['Joaquin', 'Oliver', 'Ana Julia', 'Renata'];
        let logins = ['Joa', 'Oli', 'Ana J', 'Re']

        let i = 0;

        setInterval(() => {
          if (i == 4) {
            observer.complete()
          } else {
            observer.next({ login: logins[i], name: names[i] })
          }
          i++
        }, 2000
        )
      }
    )
  }



}
