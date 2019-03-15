import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MateriasModule } from './materias/materias.module';
import { AlunosModule } from './alunos/alunos.module';

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
    AlunosModule,
    MateriasModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
