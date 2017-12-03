import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight: any;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    console.log('hover',this.appHighlight);
    this.el.nativeElement.style.backgroundColor = color;
  }
}