import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[TestHostLis]'
})
export class TestHostListenerDirective {

  @HostListener('mouseenter') onMouseEnter (){
    alert('MOUSE ENTER ACONTECEU!!')
  }

}
