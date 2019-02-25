import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MateriasComponent } from './materias/materias.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { EditarMateriaComponent } from './materias/editar-materia/editar-materia.component';
import { DetalheCursoComponent } from './cursos/detalhe-curso/detalhe-curso.component';
import { ListaCursosComponent } from './cursos/lista-curso/lista-cursos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { AlunoComponent } from './alunos/aluno/aluno.component';
import { CursoService } from './cursos/curso.service';
import { AlunoService } from './alunos/aluno.service';
import { MateriaService } from './materias/materia.service';
import { AppRoutingModule } from './app-routing.module';
import { FormCursoComponent } from './cursos/form-curso/form-curso.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MateriasComponent,
    CursosComponent,
    AlunosComponent,
    EditarMateriaComponent,
    DetalheCursoComponent,
    ListaCursosComponent,
    ListaAlunosComponent,
    AlunoComponent,
    FormCursoComponent
  ],
  providers: [
    CursoService,
    MateriaService,
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
