import { fromEvent, pipe } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  left: number = 40;
  top: number = 40;

  @ViewChild('myrect') myrect!: ElementRef

  constructor(myreact: ElementRef) {
    this.myrect = myreact
  }

  ngOnInit(): void {

    let mousedown = fromEvent(this.myrect!.nativeElement, 'mousedown')
    let mousemove = fromEvent(document, 'mousemove');
    let mouseup = fromEvent(document, 'mouseup');


    mousedown.subscribe(
      (mousedown: MouseEvent | any): any => {
        let x = mousedown.pageX;
        let y = mousedown.pageY;

        console.log(x, y)

        mousemove.
          pipe(
            takeUntil(mouseup)
          )
          .subscribe((mouseMove: MouseEvent | any) => {
            let offsetx = x - mouseMove.pageX;
            let offsety = y - mouseMove.pageY;
            this.top -= offsety;
            this.left -= offsetx;
            x = mouseMove.pageX;
            y = mouseMove.pageY;
          }
          )
      })
  }
}
