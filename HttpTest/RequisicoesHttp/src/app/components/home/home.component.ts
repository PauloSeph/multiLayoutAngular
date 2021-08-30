import { Observable, Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  seila: Observable<any> = new Observable(
    (subscribe: Observer<any>) => {
    try {
      subscribe.next('ola')
      subscribe.next(new Error('novo Erro'))
      throw new Error("Erro");

    } catch (error) {
      console.log(error)
    }
    finally {
      console.log('vou executar com erro ou sem erro')
    }
  });



}
