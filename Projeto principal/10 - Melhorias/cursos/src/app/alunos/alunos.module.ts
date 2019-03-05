import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { AlunoComponent } from './aluno/aluno.component';
import { FormsModule } from '@angular/forms';
import { AlunosRoutingModule } from './alunos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    AlunosRoutingModule
  ],
  declarations: [
    AlunosComponent,
    ListaAlunosComponent,
    AlunoComponent
  ]
})
export class AlunosModule { }
