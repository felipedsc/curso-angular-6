import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Materia } from '../materia.model';
import { MateriaService } from '../materia.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css']
})
export class EditarMateriaComponent implements OnInit, OnDestroy {
  @ViewChild("form") materiaForm: NgForm;

  modoEdicao: boolean = false;
  indexItemEdicao: number;
  itemEdicao: Materia;

  subscription: Subscription;

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.subscription = this.materiaService.editarMateria
      .subscribe((index: number) => {
        this.indexItemEdicao = index;
        this.modoEdicao = true;
        this.itemEdicao = this.materiaService.obterMateria(index);

        this.materiaForm.setValue({
          nome: this.itemEdicao.nome,
          horas: this.itemEdicao.horas
        });
      });
  }

  salvar() {
    const materia = new Materia(this.materiaForm.value.nome, this.materiaForm.value.horas);

    if (this.indexItemEdicao != null) {
      this.materiaService.atualizarMateria(this.indexItemEdicao, materia);
    } else {
      this.materiaService.adicionarMateria(materia);
    }

    this.limpar();
  }

  remover() {
    this.materiaService.removerMateria(this.indexItemEdicao);
    this.limpar();
  }

  limpar() {
    this.materiaForm.reset();
    this.modoEdicao = false;
    this.indexItemEdicao = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
