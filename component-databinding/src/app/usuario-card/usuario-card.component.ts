import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit {
  @Input("loginUsuario") login: string;

  @ViewChild('header') header: ElementRef;
  @ContentChild('paragrafo') paragrafo: ElementRef;

  constructor() { 
    console.log("Construtor chamado");
  }

  ngOnInit() {
    console.log("ngOnInit chamado");
    console.log("Header: " + this.header.nativeElement.textContent);
    console.log("Paragrafo: " + this.paragrafo.nativeElement.textContent);
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
    console.log("Header: " + this.header.nativeElement.textContent);
    console.log("Paragrafo: " + this.paragrafo.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log("Header: " + this.header.nativeElement.textContent);
    console.log("Paragrafo: " + this.paragrafo.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
