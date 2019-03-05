import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunosComponent } from './alunos.component';

const routes: Routes = [
  // {
  //   path: 'alunos', component: AlunosComponent
  // },
  // {
  //   path: 'alunos/:id/editar', component: AlunoComponent
  // },
  // {
  //   path: 'alunos/novo', component: AlunoComponent
  // },
  //Adicionar para LAZY LOADING
  {
    path: '', component: AlunosComponent
  },
  {
    path: ':id/editar', component: AlunoComponent
  },
  {
    path: 'novo', component: AlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
