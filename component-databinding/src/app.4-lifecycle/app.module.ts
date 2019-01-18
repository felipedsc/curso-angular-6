import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioCardComponent } from './usuario-card/usuario-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    UsuarioCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
