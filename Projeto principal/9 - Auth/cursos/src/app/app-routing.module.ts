import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CursosComponent } from './cursos/cursos.component';
import { MateriasComponent } from './materias/materias.component';
import { DetalheCursoComponent } from './cursos/detalhe-curso/detalhe-curso.component';
import { FormCursoComponent } from './cursos/form-curso/form-curso.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './alunos/aluno/aluno.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/cursos', pathMatch: 'full' },
  {
    path: 'cursos', component: CursosComponent,
    children: [
      { path: 'novo', component: FormCursoComponent, canActivate: [AuthGuard] },
      { path: ':id', component: DetalheCursoComponent },
      { path: ':id/editar', component: FormCursoComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'materias', component: MateriasComponent
  },
  {
    path: 'alunos', component: AlunosComponent
  },
  {
    path: 'alunos/:id/editar', component: AlunoComponent
  },
  {
    path: 'alunos/novo', component: AlunoComponent
  },
  {
    path: "signin", component: SignInComponent
  },
  {
    path: "signup", component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
