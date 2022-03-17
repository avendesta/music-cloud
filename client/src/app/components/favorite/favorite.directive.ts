import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[favorite]'
})
export class FavoriteDirective implements OnChanges {
  @Input('favorite') favorite!: string

  constructor(private element: ElementRef, private host: Renderer2) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("elem: ", this.favorite)
    if (this.favorite == 'true')
      this.host.setStyle(this.element.nativeElement, 'color', 'red')
    else
      this.host.setStyle(this.element.nativeElement, 'color', 'gray')
  }

  ngOnInit(): void {

  }
}
