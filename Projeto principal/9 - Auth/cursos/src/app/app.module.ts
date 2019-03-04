import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { DadosService } from './shared/dados.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    FormCursoComponent,
    SignInComponent,
    SignUpComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CursoService,
    MateriaService,
    AlunoService,
    DadosService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
