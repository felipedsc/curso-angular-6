import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit {
  @Input("loginUsuario") login: string;

  constructor() { 
    console.log("Construtor chamado");
  }

  ngOnInit() {
    console.log("ngOnInit chamado");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges chamado");
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck chamado!');
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit chamado!');
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    // console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
