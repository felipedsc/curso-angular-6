import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: '/cursos', pathMatch: 'full' },
  //Adicionar para LAZY LOADING
  { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule' }
];

@NgModule({
  // preload por ultimo
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
