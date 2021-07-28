import { fromEvent, Observable } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hot-ob',
  templateUrl: './hot-ob.component.html',
  styleUrls: ['./hot-ob.component.scss']
})
export class HotObComponent implements OnInit {

  @ViewChild('myButton') button!: ElementRef

  constructor() { }

  ngOnInit(): void {
    let myBtn: Observable<any> = fromEvent(
      this.button.nativeElement, 'click'
    );

    myBtn.subscribe(
      (evento) => console.log('Botão Clicado 1')
    )

    myBtn.subscribe(
      (evento) => console.log('Botão Clicado 2')
    )


    class Producer {
      private myListener = [];
      private n = 0;

     addListener(lis: any) {

        this.myListener.push()

      }

    }

  }





}
