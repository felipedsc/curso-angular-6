import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/materias', pathMatch: 'full' },
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
