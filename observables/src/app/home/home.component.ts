import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer, Subject } from 'rxjs';
import { map, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  //criar apos demonstrar possibilidade de memory leak
  numerosSubscription: Subscription;
  meuObservableSubscription: Subscription;
  valor: string;
  valorSubject = new Subject<string>();
  valorSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.numeros();
    this.meuObservable();
    this.buscaObservable();
  }

  numeros() {
    const numeros = interval(1000)
      .pipe(map(
        (data: number) => {
          return data * 2;
        }
      ));


    //inicialmente sem subscription
    this.numerosSubscription = numeros.subscribe(
      (numero: number) => {
        console.log(numero);
      }
    )
  }

  meuObservable() {
    const meuObservable: Observable<string> =
      Observable.create((observer: Observer<string>) => {
        setTimeout(() => {
          observer.next("Primeiro pacote");
        }, 2000);

        setTimeout(() => {
          observer.next("Segundo pacote");
        }, 4000);

        setTimeout(() => {
          observer.error("Falha ao executar observable");
          observer.complete();
        }, 5000);

        setTimeout(() => {
          observer.next("Terceiro pacote");
        }, 6000);
      });

    this.meuObservableSubscription = meuObservable
      .subscribe(
        (data: string) => console.log(data),
        (erro: string) => console.log(erro),
        () => console.log("Completo!")
      )
  }

  buscaObservable() {
    this.valorSubscription = this.valorSubject
      .pipe(
        debounceTime(1000),
        filter((valor: string) => valor != undefined && valor.length >= 3),
        map((valor: string) => { return `Valor: ${valor}`; })
      )
      .subscribe((valor: string) => {
        this.valor = valor;
      });
  }

  keyup(valor: string) {
    this.valorSubject.next(valor);
  }

  ngOnDestroy(): void {
    this.numerosSubscription.unsubscribe();
    this.meuObservableSubscription.unsubscribe();
    // this.valorSubscription.unsubscribe();
  }
}
