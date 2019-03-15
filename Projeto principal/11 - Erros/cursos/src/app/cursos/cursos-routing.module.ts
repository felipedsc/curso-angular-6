import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { AuthGuard } from '../auth/auth.guard';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';

const routes: Routes = [
  {
    path: '', component: CursosComponent,
    children: [
      { path: 'novo', component: FormCursoComponent, canActivate: [AuthGuard] },
      { path: ':id', component: DetalheCursoComponent },
      { path: ':id/editar', component: FormCursoComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
