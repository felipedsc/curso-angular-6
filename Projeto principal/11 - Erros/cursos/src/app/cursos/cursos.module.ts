import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { ListaCursosComponent } from './lista-curso/lista-cursos.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    DetalheCursoComponent,
    ListaCursosComponent,
    // FormCursoComponent
  ]
})
export class CursosModule { }
