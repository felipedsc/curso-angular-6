import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else {
      this.containerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef) { }

}
