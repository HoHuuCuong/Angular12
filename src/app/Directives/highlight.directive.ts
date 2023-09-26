import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'blue';
  constructor(private el:ElementRef) {
    el.nativeElement.style.color=this.appHighlight;
   }
   ngOnInit():void{
    this.el.nativeElement.style.color=this.appHighlight;
    if(this.appHighlight==""){
      this.el.nativeElement.style.color='blue';
    }
   }

}
