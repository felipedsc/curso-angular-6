import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { MateriasModule } from './materias/materias.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    SharedModule,
    // REMOVER PARA LAZY LOADING
    // AlunosModule,
    CursosModule,
    MateriasModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
