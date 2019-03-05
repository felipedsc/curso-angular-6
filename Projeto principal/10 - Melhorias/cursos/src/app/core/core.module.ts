import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { AlunoService } from '../alunos/aluno.service';
import { CursoService } from '../cursos/curso.service';
import { MateriaService } from '../materias/materia.service';
import { DadosService } from '../shared/dados.service';
import { AppRoutingModule } from '../app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlunoService,
    CursoService,
    MateriaService,
    DadosService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
