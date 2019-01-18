import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { HighlightMelhoradoDirective } from './highlight/highlight-melhorado.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HighlightMelhoradoDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
