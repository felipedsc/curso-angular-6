import { Directive, OnInit, Input, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightMelhorado]'
})
export class HighlightMelhoradoDirective implements OnInit {
  //adicionar depois
  @Input() corDefault: string = "transparent";
  @Input("appHighlightMelhorado") corHighlight: string = 'blue';
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //adicionar depoois
    this.backgroundColor = this.corDefault;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    //adicionar depois
    this.backgroundColor = this.corHighlight;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //adicionar depois
    this.backgroundColor = this.corDefault;
  }
}
