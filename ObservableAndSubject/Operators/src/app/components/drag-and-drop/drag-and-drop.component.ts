import { fromEvent } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
    mousedown.subscribe((e) => console.log(e))
  }

}
