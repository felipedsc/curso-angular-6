import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit, OnDestroy {
  pessoa: Pessoa;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pessoa = {
      id: this.route.snapshot.params["id"],
      nome: this.route.snapshot.params["nome"]
    }

    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.pessoa.id = params["id"];
        this.pessoa.nome = params["nome"];
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
